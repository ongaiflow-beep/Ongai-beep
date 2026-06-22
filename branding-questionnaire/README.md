# Kuesioner Fondasi Branding — PT Victory Utama Beton (VUB)

Generator **Google Form** otomatis dari dokumen `Kuesioner_Branding_VUB.docx`.
Berisi 28 pertanyaan dalam 7 bagian, dengan tipe field sesuai anjuran di dokumen sumber.

Karena Google Form tidak bisa dibuat dari berkas `.docx` secara langsung, form
dibangun lewat **Google Apps Script** (`KuesionerBrandingVUB.gs`) — sekali jalan,
form langsung jadi dan tersimpan di Google Drive Anda.

## Cara membuat form (±1 menit)

1. Buka <https://script.google.com> → **New project**.
2. Hapus kode contoh, lalu **tempel seluruh isi** `KuesionerBrandingVUB.gs`.
3. Klik **Save** (ikon disket).
4. Di dropdown fungsi (bagian atas), pilih **`buatFormBrandingVUB`** → klik **Run**.
5. Saat diminta izin: **Review permissions** → pilih akun Google Anda →
   **Advanced** → **Go to &lt;project&gt; (unsafe)** → **Allow**.
   *(Izin ini wajar — skrip hanya membuat Form di Drive Anda sendiri.)*
6. Buka **Execution log** yang muncul. Di sana tercetak dua tautan:
   - **Link ISI** → dibagikan ke responden (Tim Komersil / Marketing)
   - **Link EDIT** → untuk Anda menata/menyetel form

Form juga otomatis muncul di Google Drive Anda dengan nama
*"Kuesioner Fondasi Branding — PT Victory Utama Beton (VUB)"*.

## Peta tipe field (dokumen → Google Form)

| Tipe di dokumen            | Field Google Form      | No. pertanyaan                          |
|----------------------------|------------------------|------------------------------------------|
| Jawaban Singkat            | Short answer           | 1, 2, 11, 19                             |
| Paragraf                   | Paragraph              | 4, 5, 6, 13, 15, 16, 17, 18, 20, 21, 24, 25, 27, 28 |
| Pilihan Ganda              | Multiple choice        | 3, 8, 22, 26                             |
| Kotak Centang (multi)      | Checkboxes (+ "Lainnya")| 7, 10, 14                               |
| Skala 1–5                  | Linear scale (1–5)     | 9, 23                                    |
| Rank / Skala               | Multiple-choice grid   | 12                                       |

### Catatan implementasi
- **Q12 (ranking):** Google Form tidak punya field "ranking" asli, jadi didekati
  dengan **grid** — baris = 6 faktor, kolom = peringkat 1–6 (1 = paling menentukan).
  Untuk memaksa tiap kolom dipakai sekali, buka editor form → titik tiga di kartu
  Q12 → **"Limit to one response per column"** (belum bisa diset via script).
- **Opsi "Lainnya…":** pada Q7, Q10, Q14 dipasang sebagai **"Other"** bawaan
  Google Form (bukan teks "Lainnya…"), supaya responden bisa mengisi bebas.
- **Wajib diisi:** semua pertanyaan diset *required*, **kecuali** yang memang
  opsional di dokumen: **Q1 (Nama)**, **Q21**, dan **Q28**. Ubah sesuai kebutuhan.
- **Label skala** untuk Q9 mengikuti teks dokumen; untuk Q23 ditambahkan label
  netral ("Sama sekali belum" → "Sudah sangat mencerminkan").
- Kotak **"Fungsi"** dan **"Catatan untuk perancang"** pada dokumen **tidak**
  dimasukkan ke form, sesuai instruksi di dokumen sumber.

## Penyesuaian opsional
Di dalam `KuesionerBrandingVUB.gs` ada baris yang bisa diaktifkan:
- `form.setCollectEmail(true);` — catat email responden.
- `form.setLimitOneResponsePerUser(true);` — batasi satu respons per akun.
