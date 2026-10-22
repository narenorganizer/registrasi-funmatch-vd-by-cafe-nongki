const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ----------------------------------------------------
// WEB REGISTRASI FUNMATCH VIOLENT DISTRICT (VD) ROBLOX
// ----------------------------------------------------
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Registrasi Funmatch Violent District Roblox</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
            body {
                background-color: #0d0e12;
                color: #e0e6ed;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            .hero-header {
                background: linear-gradient(135deg, #1f102b 0%, #0d0e12 100%);
                border-bottom: 3px solid #7209b7;
                padding: 40px 20px;
                text-align: center;
            }
            .title-purple {
                color: #f72585;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 2px;
                text-shadow: 0 0 10px rgba(247, 37, 133, 0.5);
            }
            .card-custom {
                background-color: #161822;
                border: 1px solid #2d3142;
                border-radius: 12px;
                box-shadow: 0 8px 24px rgba(0,0,0,0.6);
            }
            .form-control, .form-select {
                background-color: #0d0e12;
                border: 1px solid #2d3142;
                color: #fff;
            }
            .form-control:focus, .form-select:focus {
                background-color: #0d0e12;
                color: #fff;
                border-color: #7209b7;
                box-shadow: 0 0 8px rgba(114, 9, 183, 0.5);
            }
            .btn-vd {
                background: linear-gradient(45deg, #7209b7, #f72585);
                color: #fff;
                font-weight: 700;
                border: none;
                padding: 12px 30px;
                border-radius: 8px;
                transition: 0.3s;
            }
            .btn-vd:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(247, 37, 133, 0.4);
                color: #fff;
            }
            .nav-pills .nav-link {
                color: #a0aab2;
                border: 1px solid #2d3142;
                margin-right: 8px;
            }
            .nav-pills .nav-link.active {
                background-color: #7209b7;
                color: #fff;
            }
            .badge-killer {
                background-color: #f72585;
                color: white;
                font-size: 0.8rem;
                padding: 3px 8px;
                border-radius: 4px;
            }
        </style>
    </head>
    <body>

        <!-- Header Banner -->
        <div class="hero-header mb-4">
            <h1 class="title-purple display-5">🎮 FUNMATCH VIOLENT DISTRICT</h1>
            <p class="text-secondary lead">Registrasi Turnamen Roblox - Violent District (VD)</p>
        </div>

        <div class="container mb-5">
            <div class="row g-4">
                
                <!-- Form Pendaftaran -->
                <div class="col-lg-7">
                    <div class="card card-custom p-4">
                        <h3 class="title-purple mb-3">📝 Form Pendaftaran</h3>
                        
                        <!-- Tab Pilihan Solo / Tim -->
                        <ul class="nav nav-pills mb-4" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-team-tab" data-bs-toggle="pill" data-bs-target="#pills-team" type="button" role="tab">⚔️ Pendaftaran Tim (5 Orang)</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-solo-tab" data-bs-toggle="pill" data-bs-target="#pills-solo" type="button" role="tab">👤 Pendaftaran Solo</button>
                            </li>
                        </ul>

                        <div class="tab-content" id="pills-tabContent">
                            
                            <!-- FORM TIM (5 ORANG + KILLER) -->
                            <div class="tab-pane fade show active" id="pills-team" role="tabpanel">
                                <form action="/submit-registration" method="POST">
                                    <input type="hidden" name="type" value="TEAM">
                                    
                                    <div class="mb-3">
                                        <label class="form-label text-warning">Nama Tim / Squad *</label>
                                        <input type="text" class="form-control" name="teamName" placeholder="Contoh: District Reapers" required>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label text-warning">Nomor WhatsApp / Discord Tag Kapten *</label>
                                        <input type="text" class="form-control" name="captainContact" placeholder="Contoh: 081234567890 / @kapten_vd" required>
                                    </div>

                                    <hr class="border-secondary my-4">

                                    <h5 class="text-info mb-3">💀 Anggota Tim & Penentuan Role</h5>
                                    
                                    <!-- Player 1 / Killer -->
                                    <div class="mb-3 p-2 border border-danger rounded">
                                        <label class="form-label text-danger font-weight-bold">🔴 Pemain 1 - Role KILLER * <span class="badge-killer">KILLER</span></label>
                                        <input type="text" class="form-control mb-1" name="killerRoblox" placeholder="Username Roblox Killer *" required>
                                    </div>

                                    <!-- Player 2-5 (Survivors / Runners) -->
                                    <div class="mb-2">
                                        <label class="form-label text-light">Pemain 2 (Survivor/Runner) *</label>
                                        <input type="text" class="form-control" name="player2Roblox" placeholder="Username Roblox Pemain 2 *" required>
                                    </div>
                                    <div class="mb-2">
                                        <label class="form-label text-light">Pemain 3 (Survivor/Runner) *</label>
                                        <input type="text" class="form-control" name="player3Roblox" placeholder="Username Roblox Pemain 3 *" required>
                                    </div>
                                    <div class="mb-2">
                                        <label class="form-label text-light">Pemain 4 (Survivor/Runner) *</label>
                                        <input type="text" class="form-control" name="player4Roblox" placeholder="Username Roblox Pemain 4 *" required>
                                    </div>
                                    <div class="mb-2">
                                        <label class="form-label text-light">Pemain 5 (Survivor/Runner) *</label>
                                        <input type="text" class="form-control" name="player5Roblox" placeholder="Username Roblox Pemain 5 *" required>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label text-secondary">Pemain Cadangan (Opsional)</label>
                                        <input type="text" class="form-control" name="reserveRoblox" placeholder="Username Roblox Cadangan">
                                    </div>

                                    <button type="submit" class="btn btn-vd w-100 mt-3">DAFTARKAN TIM VD 🚀</button>
                                </form>
                            </div>

                            <!-- FORM SOLO -->
                            <div class="tab-pane fade" id="pills-solo" role="tabpanel">
                                <form action="/submit-registration" method="POST">
                                    <input type="hidden" name="type" value="SOLO">
                                    
                                    <div class="mb-3">
                                        <label class="form-label text-warning">Username Roblox *</label>
                                        <input type="text" class="form-control" name="soloRoblox" placeholder="Contoh: RobloxPlayer123" required>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label text-warning">Nomor WhatsApp / Discord Tag *</label>
                                        <input type="text" class="form-control" name="soloContact" placeholder="Contoh: 081234567890 / @username_discord" required>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label text-warning">Role yang Diinginkan</label>
                                        <select class="form-select" name="preferredRole">
                                            <option value="Bebas">Bebas (Runner / Killer)</option>
                                            <option value="Runner">Khusus Runner/Survivor</option>
                                            <option value="Killer">Khusus Killer</option>
                                        </select>
                                    </div>

                                    <button type="submit" class="btn btn-vd w-100 mt-3">DAFTAR SOLO VD 🚀</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- Informasi & Rulebook -->
                <div class="col-lg-5">
                    <div class="card card-custom p-4 mb-4">
                        <h4 class="title-purple mb-3">📌 Info Match VD Roblox</h4>
                        <ul class="list-unstyled">
                            <li class="mb-2">🎮 <strong>Game:</strong> Roblox - Violent District</li>
                            <li class="mb-2">⚔️ <strong>Format Tim:</strong> 5 Orang (1 Killer + 4 Runners)</li>
                            <li class="mb-2">👤 <strong>Pendaftaran Solo:</strong> Dibuat acak/di-squad oleh admin</li>
                            <li class="mb-2">⏱️ <strong>Toleransi Telat:</strong> Maksimal 10 Menit</li>
                        </ul>
                    </div>

                    <div class="card card-custom p-4">
                        <h4 class="title-purple mb-3">📜 Rules Match Singkat</h4>
                        <ol class="ps-3 text-secondary" style="font-size: 0.95rem;">
                            <li class="mb-2">Wajib join server Discord dan hadir di Voice Channel saat match dimulai.</li>
                            <li class="mb-2">Dilarang menggunakan Exploit/Cheat/Script pihak ketiga. Garansi diskualifikasi!</li>
                            <li class="mb-2">Pastikan jaringan stabil sebelum pertandingan dimulai.</li>
                            <li class="mb-2">Keputusan Panitia/Admin tidak dapat diganggu gugat.</li>
                        </ol>
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
    console.log("Pendaftaran Baru Masuk:", data);
    
    let detailPendaftaran = "";
    if(data.type === "TEAM") {
        detailPendaftaran = `Tim <strong>${data.teamName}</strong> dengan Killer <strong>${data.killerRoblox}</strong>`;
    } else {
        detailPendaftaran = `Pemain Solo Roblox <strong>${data.soloRoblox}</strong>`;
    }

    res.send(`
        <body style="background-color: #0d0e12; color: #fff; text-align: center; padding-top: 100px; font-family: sans-serif;">
            <h1 style="color: #f72585;">✅ PENDAFTARAN BERHASIL!</h1>
            <p>Data ${detailPendaftaran} telah diterima oleh sistem Panitia Funmatch Violent District.</p>
            <p>Panitia akan segera menghubungi kamu via Kontak/Discord untuk konfirmasi jadwal match.</p>
            <br>
            <a href="/" style="color: #7209b7; text-decoration: none; font-weight: bold;">← Kembali ke Halaman Utama</a>
        </body>
    `);
});

// Jalankan Web Server
app.listen(PORT, () => {
    console.log(`Server Web Registrasi VD Roblox running di port ${PORT}`);
});
