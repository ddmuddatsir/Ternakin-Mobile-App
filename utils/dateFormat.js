export const dateFormat = (date) => {
  const options = {
    weekday: "long", // Nama hari (misalnya: Senin)
    day: "2-digit", // Tanggal (misalnya: 28)
    month: "long", // Nama bulan (misalnya: Desember)
    year: "numeric", // Tahun (misalnya: 2024)
  };

  const formattedDate = new Date(date).toLocaleDateString("en-EN", options);
  return formattedDate;
};

export const timeFormat = (date) => {
  const options = {
    hour: "2-digit", // Jam dengan dua digit (misalnya: 09)
    minute: "2-digit", // Menit dengan dua digit (misalnya: 05)
    hour12: false, // Gunakan format 24 jam
  };

  const formattedTime = new Date(date).toLocaleTimeString("id-ID", options);
  return formattedTime;
};
