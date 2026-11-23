// DATA DESTINASI WISATA
const destinations = [
    {
        id: 'pahawang',
        title: 'Pulau Pahawang',
        category: 'Bahari',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 240,
        price: 250000,
        priceFormatted: 'Rp 250.000',
        location: 'Pesawaran, Lampung',
        description: 'Surga snorkeling dengan keindahan terumbu karang yang terjaga dan ikan Catur/Nemo yang jinak.',
        facilities: ['Alat Snorkeling', 'Perahu Kayu', 'Penginapan Floating', 'Spot Foto Underwater']
    },
    {
        id: 'kiluan',
        title: 'Teluk Kiluan',
        category: 'Atraksi Alam',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 185,
        price: 350000,
        priceFormatted: 'Rp 350.000',
        location: 'Tanggamus, Lampung',
        description: 'Pusat atraksi kawanan lumba-lumba liar di habitat aslinya di Samudra Hindia.',
        facilities: ['Perahu Jukung', 'Pemandu Lokal', 'Kolam Renang Alami', 'Homestay Syariah']
    },
    {
        id: 'waykambas',
        title: 'Taman Nasional Way Kambas',
        category: 'Konservasi',
        image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 310,
        price: 150000,
        priceFormatted: 'Rp 150.000',
        location: 'Lampung Timur',
        description: 'Taman nasional tertua di Indonesia yang menjadi pusat perlindungan gajah Sumatra.',
        facilities: ['Safari Gajah', 'Pemandu Edukasi', 'Area Camping', 'Pusat Konservasi']
    },
    {
        id: 'tanjungsetia',
        title: 'Pantai Tanjung Setia',
        category: 'Surfing',
        image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviews: 142,
        price: 100000,
        priceFormatted: 'Rp 100.000',
        location: 'Pesisir Barat, Lampung',
        description: 'Memiliki ombak kelas dunia yang menjadi favorit para peselancar mancanegara.',
        facilities: ['Sewa Papan Selancar', 'Resort Pantai', 'Cafe & Resto', 'Instruktur']
    },
    {
        id: 'gigihiu',
        title: 'Gigi Hiu Pegadungan',
        category: 'Fotografi',
        image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        reviews: 98,
        price: 200000,
        priceFormatted: 'Rp 200.000',
        location: 'Tanggamus, Lampung',
        description: 'Gugusan batu karang tajam menjulang yang menyerupai deretan gigi hiu.',
        facilities: ['Area Parkir', 'Spot Fotografi Expert', 'Pemandu Treking']
    },
    {
        id: 'danauranau',
        title: 'Danau Ranau & Lumbok',
        category: 'Danau & Gunung',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        reviews: 120,
        price: 180000,
        priceFormatted: 'Rp 180.000',
        location: 'Lampung Barat',
        description: 'Danau vulkanik terbesar kedua di Sumatra dengan latar belakang Gunung Seminung.',
        facilities: ['Pemandian Air Panas', 'Sewa Perahu', 'Villa', 'Kuliner Khas']
    }
];

let currentBasePrice = 250000;
let temporaryBookingData = null;

// RENDER DESTINASI
function renderDestinations() {
    const container = document.getElementById('destinasi-grid');
    if (!container) return;

    container.innerHTML = destinations.map(item => `
        <div class="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
            <div class="relative h-56 overflow-hidden">
                <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                <span class="absolute top-4 left-4 bg-slate-950/60 backdrop-blur-md text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                    ${item.category}
                </span>
                <div class="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-slate-800 text-xs font-bold flex items-center gap-1 shadow-sm">
                    <i class="fa-solid fa-star text-amber-500"></i>
                    <span>${item.rating}</span>
                </div>
            </div>
            <div class="p-6 flex flex-col justify-between flex-1">
                <div>
                    <h3 class="text-xl font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors mb-1">${item.title}</h3>
                    <p class="text-xs text-slate-500 flex items-center gap-1 mb-3">
                        <i class="fa-solid fa-location-dot text-emerald-600"></i>
                        <span>${item.location}</span>
                    </p>
                    <p class="text-slate-600 text-sm line-clamp-2 leading-relaxed mb-4">${item.description}</p>
                </div>
                <div class="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <div>
                        <span class="text-[10px] text-slate-400 uppercase tracking-wider block">Mulai dari</span>
                        <span class="text-emerald-700 font-black text-lg">${item.priceFormatted}</span>
                    </div>
                    <button onclick="openDetailModal('${item.id}')" class="px-4 py-2.5 bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 text-xs font-bold rounded-xl transition-colors">
                        Detail
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// MODAL CONTROLLERS
function openDetailModal(id) {
    const item = destinations.find(d => d.id === id);
    if (!item) return;

    document.getElementById('modal-img').src = item.image;
    document.getElementById('modal-title').innerText = item.title;
    document.getElementById('modal-location').querySelector('span').innerText = item.location;
    document.getElementById('modal-rating').innerHTML = `<i class="fa-solid fa-star text-amber-500"></i> ${item.rating} (${item.reviews} Ulasan)`;
    document.getElementById('modal-price').innerText = item.priceFormatted;
    document.getElementById('modal-desc').innerText = item.description;

    document.getElementById('modal-facilities').innerHTML = item.facilities.map(f => `
        <span class="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-lg border border-emerald-100">
            <i class="fa-solid fa-check mr-1 text-emerald-600"></i>${f}
        </span>
    `).join('');

    document.getElementById('modal-book-btn').onclick = function() {
        closeModal('detail-modal');
        openBookingModal(`Tiket Wisata ${item.title}`, item.price);
    };

    showModal('detail-modal');
}

function openBookingModal(packageName, price = 250000) {
    document.getElementById('book-package').value = packageName;
    currentBasePrice = price;
    document.getElementById('book-guests').value = 1;
    calculateTotal();
    showModal('booking-modal');
}

function calculateTotal() {
    const guests = parseInt(document.getElementById('book-guests').value) || 1;
    const total = currentBasePrice * guests;
    document.getElementById('book-total-display').value = `Rp ${total.toLocaleString('id-ID')}`;
}

function openLightbox(imgSrc, caption) {
    document.getElementById('lightbox-img').src = imgSrc;
    document.getElementById('lightbox-caption').innerText = caption;
    showModal('lightbox-modal');
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('opacity-0', 'pointer-events-none');
    const content = modal.firstElementChild;
    if (content) {
        content.classList.remove('scale-95');
        content.classList.add('scale-100');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('opacity-0', 'pointer-events-none');
    const content = modal.firstElementChild;
    if (content) {
        content.classList.remove('scale-100');
        content.classList.add('scale-95');
    }
}

// FORM SUBMISSIONS
function handleHeroSearch(event) {
    event.preventDefault();
    const date = document.getElementById('search-date').value;
    if (!date) {
        showToast('Silakan pilih tanggal kunjungan Anda', 'warning');
        return;
    }
    showToast('Mencari jadwal ketersediaan tur...', 'info');
    setTimeout(() => {
        document.getElementById('destinasi').scrollIntoView({ behavior: 'smooth' });
        showToast('Menampilkan hasil pencarian', 'success');
    }, 1000);
}

function handleBookingSubmit(event) {
    event.preventDefault();
    
    // Simpan data sementara
    temporaryBookingData = {
        name: document.getElementById('book-name').value,
        phone: document.getElementById('book-phone').value,
        date: document.getElementById('book-date').value,
        package: document.getElementById('book-package').value,
        guests: document.getElementById('book-guests').value,
        total: document.getElementById('book-total-display').value,
        method: document.querySelector('input[name="payment_method"]:checked').value
    };

    closeModal('booking-modal');
    
    // Set total tagihan di modal pembayaran
    document.getElementById('pay-total-amount').innerText = temporaryBookingData.total;
    showModal('payment-modal');
}

function handleProofSubmit(event) {
    event.preventDefault();
    const fileInput = document.getElementById('payment-proof');
    
    if (fileInput.files.length === 0) {
        showToast('Silakan upload bukti pembayaran terlebih dahulu', 'warning');
        return;
    }

    closeModal('payment-modal');
    showToast('Bukti pembayaran berhasil diunggah! Reservasi dikonfirmasi.', 'success');

    // Buka WhatsApp setelah sukses upload
    setTimeout(() => {
        const message = `Halo Admin Pesona Lampung,\n\nSaya sudah melakukan pemesanan dan pembayaran:\n- Nama: ${temporaryBookingData.name}\n- Paket: ${temporaryBookingData.package}\n- Tanggal: ${temporaryBookingData.date}\n- Peserta: ${temporaryBookingData.guests} Orang\n- Total: ${temporaryBookingData.total}\n- Metode: ${temporaryBookingData.method}\n\n[Bukti transfer telah diunggah melalui website]`;
        const waUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');
    }, 1500);
}

// TOAST NOTIFICATIONS
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    let bgColor = 'bg-slate-900';
    let icon = 'fa-info-circle text-ocean-400';

    if (type === 'success') {
        bgColor = 'bg-emerald-900';
        icon = 'fa-circle-check text-emerald-400';
    } else if (type === 'warning') {
        bgColor = 'bg-amber-900';
        icon = 'fa-triangle-exclamation text-amber-400';
    }

    toast.className = `${bgColor} text-white px-4 py-3 rounded-2xl shadow-xl border border-white/10 text-sm font-medium flex items-center gap-3 pointer-events-auto transition-all duration-300 transform translate-y-2 opacity-0`;
    toast.innerHTML = `<i class="fa-solid ${icon} text-lg"></i><span>${message}</span>`;

    container.appendChild(toast);
    setTimeout(() => toast.classList.remove('translate-y-2', 'opacity-0'), 10);
    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

document.addEventListener('DOMContentLoaded', () => {
    renderDestinations();

    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
    }

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-slate-950/90', 'shadow-lg');
            navbar.classList.remove('bg-slate-900/40');
        } else {
            navbar.classList.remove('bg-slate-950/90', 'shadow-lg');
            navbar.classList.add('bg-slate-900/40');
        }
    });

    window.addEventListener('click', (e) => {
        if (e.target.id === 'detail-modal') closeModal('detail-modal');
        if (e.target.id === 'booking-modal') closeModal('booking-modal');
        if (e.target.id === 'payment-modal') closeModal('payment-modal');
    });
});