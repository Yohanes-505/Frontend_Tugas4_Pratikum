// data dummy anjing penghuni

export type Dog = {
  id: string;
  name: string;
  breed: string;
  age: string;
  gender: string;
  photo: string;
  color: string;
  traits: string[];
  bio: string;
  favoriteSnack: string;
  schedule: string;
};

export const dogs: Dog[] = [
  {
    id: "mochi",
    name: "Mochi",
    breed: "Pomeranian",
    age: "3 tahun",
    gender: "Betina",
    photo: "/images/dogs/mochi.jpg",
    color: "#f6dcc2",
    traits: ["Ceria", "Cerewet", "Suka dielus"],
    bio: "Mochi adalah penyambut tamu resmi. Begitu pintu terbuka, dia langsung berlari kecil sambil menggonggong riang. Bulunya halus dan sangat suka dielus di bagian punggung.",
    favoriteSnack: "Biskuit labu",
    schedule: "Setiap hari, 09.00 – 17.00",
  },
  {
    id: "bruno",
    name: "Bruno",
    breed: "Golden Retriever",
    age: "5 tahun",
    gender: "Jantan",
    photo: "/images/dogs/bruno.jpg",
    color: "#f3d9a8",
    traits: ["Ramah", "Tenang", "Pelukable"],
    bio: "Si kakak besar yang sabar. Bruno paling cocok untuk kamu yang baru pertama kali main dengan anjing besar. Dia tidak keberatan dijadikan bantal sandaran.",
    favoriteSnack: "Biskuit ayam",
    schedule: "Senin – Sabtu, 10.00 – 19.00",
  },
  {
    id: "luna",
    name: "Luna",
    breed: "Welsh Corgi",
    age: "2 tahun",
    gender: "Betina",
    photo: "/images/dogs/luna.jpg",
    color: "#f7d6c0",
    traits: ["Lincah", "Jahil", "Suka main bola"],
    bio: "Kaki pendek, energi panjang. Luna selalu membawa bola kesayangannya dan menagih orang untuk melempar. Hati-hati, kamu bisa lupa waktu bermain dengannya.",
    favoriteSnack: "Biskuit keju",
    schedule: "Setiap hari, 09.00 – 15.00",
  },
  {
    id: "kopi",
    name: "Kopi",
    breed: "Toy Poodle",
    age: "4 tahun",
    gender: "Jantan",
    photo: "/images/dogs/kopi.jpg",
    color: "#e5c6a8",
    traits: ["Pintar", "Elegan", "Pemalu"],
    bio: "Bulunya cokelat tua seperti biji kopi, makanya dinamai Kopi. Awalnya malu-malu, tapi begitu kenal dia akan setia menemani meja kamu.",
    favoriteSnack: "Biskuit apel",
    schedule: "Rabu – Minggu, 11.00 – 20.00",
  },
  {
    id: "oreo",
    name: "Oreo",
    breed: "Siberian Husky",
    age: "3 tahun",
    gender: "Jantan",
    photo: "/images/dogs/oreo.jpg",
    color: "#d9dde3",
    traits: ["Dramatis", "Aktif", "Penyanyi"],
    bio: "Hitam putih dan penuh drama. Oreo suka 'bernyanyi' saat jam makan siang dan jadi bintang di sesi foto pengunjung.",
    favoriteSnack: "Biskuit ayam",
    schedule: "Jumat – Minggu, 10.00 – 20.00",
  },
  {
    id: "biscuit",
    name: "Biscuit",
    breed: "Doodle",
    age: "6 tahun",
    gender: "Jantan",
    photo: "/images/dogs/biscuit.jpg",
    color: "#e8d3b0",
    traits: ["Penciuman tajam", "Santai", "Tukang tidur"],
    bio: "Senior di antara para penghuni. Biscuit lebih suka rebahan di pojok favoritnya, tapi hidungnya selalu tahu kalau ada camilan di dekatnya.",
    favoriteSnack: "Biskuit pisang",
    schedule: "Senin – Jumat, 09.00 – 16.00",
  },
];

export function getDogById(id: string): Dog | undefined {
  return dogs.find((dog) => dog.id === id);
}
