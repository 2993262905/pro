
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <title>畏惧了</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
            outline: none;
        }

        html, body {
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: fixed;
            top: 0;
            left: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: #000;
            color: #fff;
            touch-action: none;
            -webkit-user-select: none;
            user-select: none;
        }

        .background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('bg.jpg') center/cover no-repeat;
            filter: brightness(0.8);
            z-index: -1;
            transform: translate(0, 0) !important;
        }

        #rippleCanvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            pointer-events: none;
        }

        .container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            position: relative;
            z-index: 1;
        }

        /* 七段数码管字体 */
        @font-face {
            font-family: 'Digital-7';
            src: url('https://cdn.jsdelivr.net/npm/digital-7-font@1.0.0/digital-7.ttf') format('truetype');
        }
        .title {
            font-family: 'Digital-7', monospace;
            font-size: 4rem;
            font-weight: normal;
            margin-bottom: 40px;
            color: #000;
            text-shadow: 0 0 8px #7ed957;
            letter-spacing: 2px;
        }

        .quote-box {
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(8px);
            padding: 30px 25px;
            border-radius: 12px;
            width: 100%;
            max-width: 600px;
            position: relative;
            transition: transform 0.3s ease-out;
            transform-origin: center;
        }

        .quote-left {
            position: absolute;
            top: 15px;
            left: 15px;
            font-size: 2rem;
            opacity: 0.5;
        }
        .quote-right {
            position: absolute;
            bottom: 15px;
            right: 15px;
            font-size: 2rem;
            opacity: 0.5;
        }
        .quote-en {
            font-family: 'Georgia', serif;
            font-style: italic;
            font-size: 1.8rem;
            margin-bottom: 15px;
            padding-left: 20px;
        }
        .quote-cn {
            font-size: 1.4rem;
            padding-left: 20px;
        }

        .social-links {
            display: flex;
            gap: 25px;
            margin-bottom: 40px;
        }
        .social-icon {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: rgba(255,255,255,0.1);
            font-size: 1.5rem;
            -webkit-tap-highlight-color: transparent;
        }

        .menu-btn {
            width: 60px;
            height: 60px;
            border-radius: 12px;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            cursor: pointer;
            transition: transform 0.4s ease;
            -webkit-tap-highlight-color: transparent;
            outline: none;
            border: none;
        }

        .menu-btn.rotated {
            transform: rotate(90deg);
        }

        .footer {
            position: absolute;
            bottom: 20px;
            left: 0;
            width: 100%;
            text-align: center;
            font-size: 1rem;
            opacity: 0.8;
        }

        .sidebar {
            position: fixed;
            top: 0;
            left: -280px;
            width: 280px;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(10px);
            z-index: 99;
            padding: 60px 20px 20px;
            transition: left 0.4s ease;
        }

        .sidebar.show {
            left: 0;
        }

        .sidebar-item {
            padding: 16px 20px;
            margin-bottom: 10px;
            border-radius: 8px;
            background: rgba(255,255,255,0.08);
            font-size: 1.1rem;
            cursor: pointer;
            transition: background 0.3s;
            -webkit-tap-highlight-color: transparent;
        }

        .sidebar-item:hover {
            background: rgba(255,255,255,0.15);
        }
    </style>
</head>
<body>
    <div class="background"></div>
    <canvas id="rippleCanvas"></canvas>

    <div class="sidebar" id="sidebar">
        <div class="sidebar-item">首页</div>
        <div class="sidebar-item">作品集</div>
        <div class="sidebar-item">关于我</div>
        <div class="sidebar-item">设置</div>
        <div class="sidebar-item">联系</div>
    </div>
    <div class="container">
        <!-- 数码管时间显示 -->
        <h1 class="title" id="timeTitle">00:00:00</h1>

        <div class="quote-box" id="shakeBox">
            <span class="quote-left">“</span>
            <div class="quote-en">Hello World!</div>
            <div class="quote-cn">畏惧了</div>
            <span class="quote-right">”</span>
        </div>
        <div class="social-links">
            <div class="social-icon">🐱</div>
            <div class="social-icon">📺</div>
            <div class="social-icon">🐧</div>
            <div class="social-icon">✉️</div>
            <div class="social-icon">🐦</div>
            <div class="social-icon">📨</div>
        </div>
        <div class="menu-btn" id="menuBtn">☰</div>
        <div class="footer">rw畏惧了</div>
    </div>

    <script>
        const box = document.getElementById('shakeBox');
        const menuBtn = document.getElementById('menuBtn');
        const sidebar = document.getElementById('sidebar');
        const canvas = document.getElementById('rippleCanvas');
        const ctx = canvas.getContext('2d');
        const timeTitle = document.getElementById('timeTitle');

        // 实时时间 精确到秒
        function updateTime() {
            const now = new Date();
            const h = String(now.getHours()).padStart(2, '0');
            const m = String(now.getMinutes()).padStart(2, '0');
            const s = String(now.getSeconds()).padStart(2, '0');
            timeTitle.textContent = `${h}:${m}:${s}`;
        }
        updateTime();
        setInterval(updateTime, 1000);

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        let ripples = [];
        let lastX = 0, lastY = 0;

        // 单次1圈涟漪
        function createRipple(x, y) {
            ripples.push({
                x: x,
                y: y,
                radius: 0,
                maxRadius: 100,
                alpha: 1,
                color: 'rgba(0, 212, 255, 1)'
            });
        }

        function drawRipples() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < ripples.length; i++) {
                const r = ripples[i];
                ctx.beginPath();
                ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
                ctx.strokeStyle = r.color;
                ctx.lineWidth = 1.5;
                ctx.globalAlpha = r.alpha;
                ctx.stroke();

                r.radius += 1.8;
                r.alpha -= 0.015;

                if (r.alpha <= 0 || r.radius > r.maxRadius) {
                    ripples.splice(i, 1);
                    i--;
                }
            }
            requestAnimationFrame(drawRipples);
        }
        drawRipples();

        let lastTime = 0;
        function handleMove(e) {
            const now = Date.now();
            if (now - lastTime < 80) return;
            lastTime = now;

            let x, y;
            if (e.type === 'touchmove') {
                x = e.touches[0].clientX;
                y = e.touches[0].clientY;
            } else {
                x = e.clientX;
                y = e.clientY;
            }

            const dx = x - lastX;
            const dy = y - lastY;
            if (Math.sqrt(dx*dx + dy*dy) > 12) {
                createRipple(x, y);
                lastX = x;
                lastY = y;
            }
        }

        document.addEventListener('touchmove', handleMove, { passive: true });
        document.addEventListener('mousemove', handleMove);

        document.addEventListener('touchmove', (e) => {
            if (!e.cancelable) return;
            e.preventDefault();
        }, { passive: false });

        function toggleMenu() {
            menuBtn.classList.toggle('rotated');
            sidebar.classList.toggle('show');
        }
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });
        document.addEventListener('click', (e) => {
            if (sidebar.classList.contains('show') &&
                !sidebar.contains(e.target) &&
                e.target !== menuBtn) {
                toggleMenu();
            }
        });

        let time = 0;
        function autoShake() {
            time += 0.04;
            const x = 15 * Math.sin(time);
            const y = 8 * Math.sin(time + 1.5);
            const r = 4 * Math.sin(time + 0.8);
            box.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
            requestAnimationFrame(autoShake);
        }
        autoShake();
    </script>
</body>
</html>
