// 全局变量
let loveStartDate = '2023-05-20'; // 默认日期，可通过配置面板修改
const loveQuotes = [
    "爱情是一种甜蜜的痛苦，痛并快乐着。",
    "世界上最遥远的距离不是生与死，而是我站在你面前，你却不知道我爱你。",
    "你若安好，便是晴天。",
    "我喜欢你，不是因为你是谁，而是我在你面前可以是谁。",
    "有一种爱的感觉，叫做想念；有一种想念的感觉，叫做温馨。",
    "我爱你不是因为你是谁，而是我在你面前可以是谁。",
    "你不需要多好，我喜欢就好。",
    "我们笑着说再见，却深知再见遥遥无期。",
    "一辈子很长，等我们老了，还有故事可以说给你听。",
    "我余光中都是你，亦是心之所向。"
];

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化粒子效果
    initParticles();
    
    // 初始化玫瑰花瓣
    initRosePetals();
    
    // 初始化情话气泡
    initLoveBubbles();
    
    // 初始化计时器
    updateLoveCounter();
    
    // 初始化事件监听器
    initEventListeners();
    
    // 加载本地存储的配置
    loadConfig();
});

// 初始化粒子效果
function initParticles() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 200,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "heart",
                "stroke": {
                    "width": 0,
                    "color": "#ff0000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}

// 初始化玫瑰花瓣
function initRosePetals() {
    const rosePetalsContainer = document.querySelector('.rose-petals');
    const petalsCount = 30;
    const petalImages = [
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="%23ffb6c1"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="%23ff69b4"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="%23f8c9d4"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>'
    ];
    
    for (let i = 0; i < petalsCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('rose-petal');
        
        // 随机选择花瓣图片
        const randomPetalImage = petalImages[Math.floor(Math.random() * petalImages.length)];
        petal.style.backgroundImage = `url('${randomPetalImage}')`;
        
        // 随机大小
        const size = Math.random() * 20 + 10;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        
        // 随机位置
        petal.style.left = `${Math.random() * 100}%`;
        
        // 随机动画持续时间
        const duration = Math.random() * 10 + 10;
        petal.style.animationDuration = `${duration}s`;
        
        // 随机延迟
        petal.style.animationDelay = `${Math.random() * 10}s`;
        
        rosePetalsContainer.appendChild(petal);
    }
}

// 初始化情话气泡
function initLoveBubbles() {
    setInterval(() => {
        if (document.visibilityState === 'visible') {
            createLoveBubble();
        }
    }, 5000);
}

// 创建情话气泡
function createLoveBubble() {
    const container = document.querySelector('.background-container');
    const bubble = document.createElement('div');
    bubble.classList.add('love-bubble');
    
    // 随机选择情话
    const randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
    bubble.textContent = randomQuote;
    
    // 随机位置
    bubble.style.left = `${Math.random() * 70 + 15}%`;
    bubble.style.top = `${Math.random() * 70 + 15}%`;
    
    container.appendChild(bubble);
    
    // 移除气泡
    setTimeout(() => {
        bubble.remove();
    }, 10000);
}

// 更新爱情计时器
function updateLoveCounter() {
    const startDate = new Date(loveStartDate);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - startDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    
    document.getElementById('days-counter').textContent = daysDiff;
    document.getElementById('start-date').textContent = formatDate(startDate);
}

// 格式化日期为 YYYY.MM.DD
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
}

// 初始化事件监听器
function initEventListeners() {
    // 情书点击事件
    document.querySelector('.letter-trigger').addEventListener('click', function() {
        const letterContent = document.querySelector('.letter-content');
        letterContent.classList.toggle('open');
    });
    
    // 音乐控制
    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');
    
    musicToggle.addEventListener('click', function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicToggle.classList.add('playing');
        } else {
            backgroundMusic.pause();
            musicToggle.classList.remove('playing');
        }
    });
    
    // 配置面板
    const configToggle = document.getElementById('config-toggle');
    const configContent = document.querySelector('.config-content');
    
    configToggle.addEventListener('click', function() {
        configContent.style.display = configContent.style.display === 'block' ? 'none' : 'block';
    });
    
    // 保存配置
    document.getElementById('save-config').addEventListener('click', function() {
        saveConfig();
    });
    
    // 嗅闻玫瑰香气彩蛋
    document.getElementById('scent-button').addEventListener('click', function() {
        Swal.fire({
            title: '嗅闻玫瑰香气',
            text: '想象一下玫瑰花的芬芳正围绕着你...',
            imageUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" fill="%23ff6b6b"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: '玫瑰花',
            confirmButtonText: '感受到了',
            confirmButtonColor: '#ff6b6b',
            backdrop: `
                rgba(248,201,212,0.4)
                url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' fill='%23ff6b6b'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/></svg>")
                left top
                no-repeat
            `
        });
    });
    
    // 点击爱心涟漪效果
    document.addEventListener('click', function(e) {
        createHeartRipple(e.clientX, e.clientY);
    });
}

// 创建爱心涟漪效果
function createHeartRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.classList.add('heart-ripple');
    ripple.style.left = `${x - 15}px`;
    ripple.style.top = `${y - 15}px`;
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 1000);
}

// 保存配置
function saveConfig() {
    const yourName = document.getElementById('your-name').value;
    const partnerName = document.getElementById('partner-name').value;
    const anniversaryDate = document.getElementById('anniversary-date').value;
    const customLetter = document.getElementById('custom-letter').value;
    
    // 更新标题
    if (yourName && partnerName) {
        document.getElementById('couple-names').textContent = `${yourName} ♡ ${partnerName}`;
    }
    
    // 更新纪念日
    if (anniversaryDate) {
        loveStartDate = anniversaryDate;
        updateLoveCounter();
    }
    
    // 更新情书
    if (customLetter) {
        document.getElementById('love-letter').textContent = customLetter;
    }
    
    // 更新签名
    if (yourName) {
        document.getElementById('signature').textContent = `爱你的 ${yourName}`;
    }
    
    // 保存到本地存储
    const config = {
        yourName,
        partnerName,
        anniversaryDate,
        customLetter
    };
    
    localStorage.setItem('lovePageConfig', JSON.stringify(config));
    
    // 显示保存成功提示
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '设置已保存',
        showConfirmButton: false,
        timer: 1500
    });
    
    // 隐藏配置面板
    document.querySelector('.config-content').style.display = 'none';
}

// 加载本地存储的配置
function loadConfig() {
    const savedConfig = localStorage.getItem('lovePageConfig');
    
    if (savedConfig) {
        const config = JSON.parse(savedConfig);
        
        // 填充表单
        document.getElementById('your-name').value = config.yourName || '';
        document.getElementById('partner-name').value = config.partnerName || '';
        document.getElementById('anniversary-date').value = config.anniversaryDate || '';
        document.getElementById('custom-letter').value = config.customLetter || '';
        
        // 更新页面
        if (config.yourName && config.partnerName) {
            document.getElementById('couple-names').textContent = `${config.yourName} ♡ ${config.partnerName}`;
        }
        
        if (config.anniversaryDate) {
            loveStartDate = config.anniversaryDate;
            updateLoveCounter();
        }
        
        if (config.customLetter) {
            document.getElementById('love-letter').textContent = config.customLetter;
        }
        
        if (config.yourName) {
            document.getElementById('signature').textContent = `爱你的 ${config.yourName}`;
        }
    }
}

// 自动播放背景音乐（需要用户交互）
document.addEventListener('click', function() {
    const backgroundMusic = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');
    
    if (backgroundMusic.paused) {
        backgroundMusic.play()
            .then(() => {
                musicToggle.classList.add('playing');
            })
            .catch(error => {
                console.error('自动播放失败:', error);
            });
    }
}, { once: true }); 