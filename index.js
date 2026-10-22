const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CAFE NONGKI - FUNMATCH PORTAL</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
        <style>
            :root {
                --bg-cream: #f6f4eb;
                --card-white: #ffffff;
                --banner-dark: #222222;
                --gold-accent: #d4a373;
                --gold-text: #b5838d;
                --tab-active: #1a1a1a;
                --input-bg: #f2f0e6;
                --border-color: #e5e0d8;
            }

            body {
                background-color: var(--bg-cream);
                color: #333;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                padding-bottom: 50px;
            }

            /* Top Header Bar */
            .top-navbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px 0;
                margin-bottom: 20px;
            }
            .brand-logo {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            .logo-circle {
                width: 50px;
                height: 50px;
                background-color: #fff;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 0.8rem;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                border: 1px solid var(--border-color);
            }
            .brand-title {
                font-weight: 800;
                font-size: 1.2rem;
                margin: 0;
                line-height: 1.1;
                letter-spacing: 0.5px;
            }
            .brand-subtitle {
                font-size: 0.75rem;
                color: #c08552;
                font-weight: 700;
                letter-spacing: 1px;
                margin: 0;
            }

            /* Buttons & Tabs */
            .qr-btn {
                background-color: #222;
                color: #fff;
                border-radius: 8px;
                padding: 6px 16px;
                font-weight: 600;
                font-size: 0.85rem;
                border: none;
            }

            .main-tabs {
                background: #fff;
                padding: 6px;
                border-radius: 12px;
                display: flex;
                gap: 100px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.04);
                margin-bottom: 25px;
            }
            .main-tabs .nav-link {
                flex: 1;
                text-align: center;
                border-radius: 8px;
                color: #555;
                font-weight: 700;
                font-size: 0.95rem;
                padding: 10px;
                border: none;
            }
            .main-tabs .nav-link.active {
                background-color: var(--tab-active);
                color: #fff;
            }

            /* Dark Banner Card */
            .banner-card {
                background-color: var(--banner-dark);
                color: #fff;
                border-radius: 16px;
                padding: 30px;
                position: relative;
                overflow: hidden;
                margin-bottom: 25px;
            }
            .badge-gold {
                background-color: rgba(212, 163, 115, 0.2);
                color: #e6b89c;
                border: 1px solid #d4a373;
                border-radius: 20px;
                padding: 5px 15px;
                font-size: 0.75rem;
                font-weight: 700;
                letter-spacing: 1px;
                display: inline-block;
                margin-bottom: 15px;
            }
            .banner-title {
                font-weight: 900;
                font-size: 1.8rem;
                letter-spacing: 1px;
                margin-bottom: 5px;
            }
            .banner-desc {
                color: #aaa;
                font-size: 0.95rem;
                margin-bottom: 25px;
            }
            .banner-info {
                display: flex;
                gap: 30px;
                font-size: 0.85rem;
                color: #ddd;
            }
            .controller-bg-icon {
                position: absolute;
                right: -20px;
                bottom: -30px;
                font-size: 11rem;
                color: rgba(255,255,255,0.05);
                pointer-events: none;
            }

            /* Form Section */
            .form-card {
                background-color: #fff;
                border-radius: 16px;
                padding: 30px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.03);
            }
            .section-header {
                font-weight: 800;
                font-size: 0.95rem;
                letter-spacing: 0.5px;
                color: #222;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .form-label-custom {
                font-size: 0.85rem;
                font-weight: 700;
                color: #333;
                margin-bottom: 6px;
            }
            .input-custom {
                background-color: var(--input-bg);
                border: 1px solid transparent;
                border-radius: 10px;
                padding: 10px 15px;
                font-size: 0.9rem;
                color: #555;
            }
            .input-custom:focus {
                background-color: #fff;
                border-color: #d4a373;
                box-shadow: 0 0 0 3px rgba(212, 163, 115, 0.2);
            }
            .btn-submit {
                background-color: #222;
                color: #fff;
                font-weight: 700;
                border-radius: 10px;
                padding: 12px;
                width: 100%;
                border: none;
                margin-top: 15px;
            }
            .btn-submit:hover {
                background-color: #000;
                color: #fff;
            }
        </style>
    </head>
    <body>

        <div class="container" style="max-width: 850px;">
            
            <!-- Top Navbar -->
            <div class="top-navbar">
                <div class="brand-logo">
                    <div class="logo-circle">
                        <span>cafe<br>nongki</span>
                    </div>
                    <div>
                        <h1 class="brand-title">CAFE NONGKI</h1>
                        <p class="brand-subtitle">FUNMATCH PORTAL</p>
                    </div>
                </div>
                <button class="qr-btn"><i class="bi bi-qr-code-scan me-1"></i> QR Web</button>
            </div>

            <!-- Tab Navigation (Solo / Tim) -->
            <ul class="nav main-tabs" id="myTab" role="tablist">
                <li class="nav-item flex-fill" role="presentation">
                    <button class="nav-link active w-100" id="solo-tab" data-bs-toggle="tab" data-bs-target="#solo-pane" type="button"><i class="bi bi-pencil-square me-2"></i>Form Pendaftaran Solo</button>
                </li>
                <li class="nav-item flex-fill" role="presentation">
                    <button class="nav-link w-100" id="team-tab" data-bs-toggle="tab" data-bs-target="#team-pane" type="button"><i class="bi bi-people-fill me-2"></i>Form Pendaftaran Tim (5 Orang)</button>
                </li>
            </ul>

            <div class="tab-content" id="myTabContent">
                
                <!-- ================= TAB SOLO ================= -->
                <div class="tab-pane fade show active" id="solo-pane" role="tabpanel">
                    
                    <!-- Dark Banner -->
                    <div class="banner-card">
                        <span class="badge-gold"><i class="bi bi-trophy-fill me-1"></i> SOLO TOURNAMENT (RANDOM TEAM)</span>
                        <h2 class="banner-title">FUNMATCH VIOLENT DISTRICT</h2>
                        <p class="banner-desc">Daftar perorangan, nanti panitia yang akan mengacak tim!</p>
                        
                        <div class="banner-info">
                            <span><i class="bi bi-person-plus-fill me-1" style="color: #d4a373;"></i> Sistem: Solo Player</span>
                            <span><i class="bi bi-geo-alt-fill me-1" style="color: #d4a373;"></i> Cafe Nongki</span>
                        </div>
                        <i class="bi bi-controller controller-bg-icon"></i>
                    </div>

                    <!-- Form Card Solo -->
                    <div class="form-card">
                        <div class="section-header">
                            <i class="bi bi-person-fill text-warning"></i> DATA DIRI PESETA SOLO
                        </div>
                        
                        <form action="/submit-registration" method="POST">
                            <input type="hidden" name="type" value="SOLO">
                            
                            <div class="mb-3">
                                <label class="form-label-custom">Nama Lengkap *</label>
                                <input type="text" class="form-control input-custom" name="fullName" placeholder="Nama Asli Kamu" required>
                            </div>

                            <div class="mb-3">
                                <label class="form-label-custom">Username Roblox *</label>
                                <input type="text" class="form-control input-custom" name="soloRoblox" placeholder="Username Roblox Kamu" required>
                            </div>

                            <div class="mb-4">
                                <label class="form-label-custom">Username Discord *</label>
                                <input type="text" class="form-control input-custom" name="discordUser" placeholder="Contoh: username#1234 atau username" required>
                            </div>

                            <button type="submit" class="btn-submit">KIRIM PENDAFTARAN SOLO 🚀</button>
                        </form>
                    </div>
                </div>


                <!-- ================= TAB TIM (5 ORANG) ================= -->
                <div class="tab-pane fade" id="team-pane" role="tabpanel">
                    
                    <!-- Dark Banner -->
                    <div class="banner-card">
                        <span class="badge-gold"><i class="bi bi-trophy-fill me-1"></i> SQUAD TOURNAMENT (5 VS 5)</span>
                        <h2 class="banner-title">FUNMATCH VIOLENT DISTRICT</h2>
                        <p class="banner-desc">Daftarkan tim kamu (5 Orang: 1 Killer + 4 Runners)!</p>
                        
                        <div class="banner-info">
                            <span><i class="bi bi-people-fill me-1" style="color: #d4a373;"></i> Sistem: Team Match</span>
                            <span><i class="bi bi-geo-alt-fill me-1" style="color: #d4a373;"></i> Cafe Nongki</span>
                        </div>
                        <i class="bi bi-controller controller-bg-icon"></i>
                    </div>

                    <!-- Form Card Tim -->
                    <div class="form-card">
                        <form action="/submit-registration" method="POST">
                            <input type="hidden" name="type" value="TEAM">

                            <div class="section-header">
                                <i class="bi bi-shield-fill text-warning"></i> DATA TIM
                            </div>
                            
                            <div class="row mb-3">
                                <div class="col-md-6 mb-2">
                                    <label class="form-label-custom">Nama Tim / Squad *</label>
                                    <input type="text" class="form-control input-custom" name="teamName" placeholder="Nama Skuad Kamu" required>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <label class="form-label-custom">Username Discord Kapten *</label>
                                    <input type="text" class="form-control input-custom" name="captainDiscord" placeholder="Discord Kapten" required>
                                </div>
                            </div>

                            <hr class="my-4" style="border-color: var(--border-color);">

                            <div class="section-header">
                                <i class="bi bi-person-badge-fill text-danger"></i> ANGGOTA TIM & ROLE (ROBLOX USERNAME)
                            </div>

                            <!-- Player 1 / Killer -->
                            <div class="p-3 mb-3 rounded" style="background-color: #fff0f0; border: 1px solid #ffccd5;">
                                <label class="form-label-custom text-danger"><i class="bi bi-crosshair me-1"></i> Pemain 1 - Role KILLER *</label>
                                <input type="text" class="form-control input-custom" name="killerRoblox" placeholder="Username Roblox Killer" required>
                            </div>

                            <!-- Players 2-5 Runners -->
                            <div class="row g-2 mb-3">
                                <div class="col-md-6 mb-2">
                                    <label class="form-label-custom">Pemain 2 (Runner) *</label>
                                    <input type="text" class="form-control input-custom" name="runner1" placeholder="Username Roblox Pemain 2" required>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <label class="form-label-custom">Pemain 3 (Runner) *</label>
                                    <input type="text" class="form-control input-custom" name="runner2" placeholder="Username Roblox Pemain 3" required>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <label class="form-label-custom">Pemain 4 (Runner) *</label>
                                    <input type="text" class="form-control input-custom" name="runner3" placeholder="Username Roblox Pemain 4" required>
                                </div>
                                <div class="col-md-6 mb-2">
                                    <label class="form-label-custom">Pemain 5 (Runner) *</label>
                                    <input type="text" class="form-control input-custom" name="runner4" placeholder="Username Roblox Pemain 5" required>
                                </div>
                            </div>

                            <div class="mb-4">
                                <label class="form-label-custom">Pemain Cadangan (Opsional)</label>
                                <input type="text" class="form-control input-custom" name="reservePlayer" placeholder="Username Roblox Cadangan">
                            </div>

                            <button type="submit" class="btn-submit">KIRIM PENDAFTARAN TIM 🚀</button>
                        </form>
                    </div>

                </div>

            </div>

        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
    `);
});

// Endpoint Menerima Data Form
app.post('/submit-registration', (req, res) => {
    const data = req.body;
    console.log("Pendaftaran Masuk:", data);

    res.send(`
        <body style="background-color: #f6f4eb; color: #222; text-align: center; padding-top: 100px; font-family: sans-serif;">
            <div style="background: #fff; max-width: 500px; margin: 0 auto; padding: 40px; border-radius: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                <h2 style="color: #222; font-weight: 800;">✅ PENDAFTARAN BERHASIL!</h2>
                <p style="color: #666; margin-top: 10px;">Data pendaftaran kamu sudah berhasil diterima oleh panitia Cafe Nongki.</p>
                <br>
                <a href="/" style="background: #222; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-weight: bold;">← Kembali ke Portal</a>
            </div>
        </body>
    `);
});

app.listen(PORT, () => {
    console.log(`Server Portal Cafe Nongki Running di Port ${PORT}`);
});
