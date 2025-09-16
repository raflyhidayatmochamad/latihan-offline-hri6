const user = {
    nama: 'Budi',
    sayHi: function () {
        console.log(`Halo nama saya ${this.nama}`); // this mengacu ke object user

        // Fungsi anonim ini memiliki 'this' sendiri.
        // Jika ingin tetap mengakses this.user, gunakan arrow function
        setTimeout(() => {
            // Arrow function tidak membuat this baru, jadi tetap mengacu ke object user
            console.log(`Setelah 1 detik, nama saya ${this.nama}`);
        }, 1000);
    }
};

user.sayHi();
// Output:
// Halo nama saya Budi
// Setelah 1 detik, nama saya Budi
