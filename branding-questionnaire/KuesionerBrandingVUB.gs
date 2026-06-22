/**
 * Kuesioner Fondasi Branding — PT Victory Utama Beton (VUB)
 * =========================================================
 * Google Apps Script yang MEMBANGUN Google Form lengkap secara otomatis
 * (28 pertanyaan, 7 bagian, tipe field sesuai dokumen sumber).
 *
 * CARA PAKAI (sekali jalan, ±1 menit):
 *   1. Buka https://script.google.com  →  klik "New project".
 *   2. Hapus kode contoh, lalu TEMPEL seluruh isi file ini.
 *   3. Klik Save (ikon disket).
 *   4. Di dropdown fungsi (atas), pilih "buatFormBrandingVUB" → klik "Run".
 *   5. Saat diminta izin: "Review permissions" → pilih akun Google Anda →
 *      "Advanced" → "Go to <project> (unsafe)" → "Allow".
 *      (Izin wajar: skrip hanya membuat Form di Google Drive Anda sendiri.)
 *   6. Lihat "Execution log" yang muncul. Di sana tercetak:
 *        • Link ISI  → dibagikan ke responden (Tim Komersil / Marketing)
 *        • Link EDIT → untuk Anda menata/menyetel form
 *      Form juga otomatis tersimpan di Google Drive Anda.
 *
 * Catatan: kotak "Fungsi" dan "Catatan untuk perancang" pada dokumen sumber
 * sengaja TIDAK dimasukkan ke form (sesuai instruksi di dokumen tersebut).
 */

function buatFormBrandingVUB() {
  var form = FormApp.create('Kuesioner Fondasi Branding — PT Victory Utama Beton (VUB)');

  form.setDescription(
    'Ditujukan untuk: Tim Komersil / Marketing\n\n' +
    'Kuesioner ini disusun sebagai langkah riset awal (Fase 1 pembentukan brand identity) ' +
    'sebelum perancangan strategi dan identitas visual VUB. Jawaban Anda menjadi fondasi untuk ' +
    'analisis positioning, segmentasi, dan diferensiasi merek. Mohon dijawab sejujur dan ' +
    'sespesifik mungkin — jawaban "kira-kira" akan menghasilkan branding yang "kira-kira" juga.'
  );

  form.setProgressBar(true);              // tampilkan progress bar antar bagian
  // form.setCollectEmail(true);          // aktifkan bila ingin mencatat email responden
  // form.setLimitOneResponsePerUser(true);

  // ============================================================
  // BAGIAN 1 — Identitas Responden
  // ============================================================
  form.addSectionHeaderItem()
    .setTitle('BAGIAN 1 — Identitas Responden');

  form.addTextItem()
    .setTitle('1. Nama (opsional)')
    .setRequired(false);

  form.addTextItem()
    .setTitle('2. Jabatan / divisi Anda di VUB')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('3. Sudah berapa lama Anda menangani sisi komersil/pemasaran VUB?')
    .setChoiceValues(['< 1 tahun', '1–3 tahun', '> 3 tahun'])
    .setRequired(true);

  // ============================================================
  // BAGIAN 2 — Analisis Internal Perusahaan (Company)
  // ============================================================
  form.addPageBreakItem()
    .setTitle('BAGIAN 2 — Analisis Internal Perusahaan (Company)');

  form.addParagraphTextItem()
    .setTitle('4. Dalam satu kalimat, bagaimana Anda menjelaskan VUB kepada calon klien yang belum pernah mendengar nama kami?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('5. Menurut Anda, apa 3 kekuatan/keunggulan utama VUB yang paling membuat klien akhirnya memilih kami?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('6. Sebaliknya, apa kelemahan atau keluhan yang paling sering Anda dengar dari klien/prospek tentang VUB?')
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('7. Jika VUB adalah seorang manusia, sifat/kepribadian seperti apa yang ingin kita tampilkan?')
    .setChoiceValues([
      'Profesional & terpercaya',
      'Modern & inovatif',
      'Cepat & responsif',
      'Tangguh & berpengalaman',
      'Hangat & mudah diajak kerja sama',
      'Premium & berkelas'
    ])
    .showOtherOption(true)
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('8. Orientasi nilai mana yang paling menggambarkan VUB hari ini?')
    .setChoiceValues([
      'Pelayanan prima (paling melayani & fleksibel ke kebutuhan klien)',
      'Kepemimpinan produk (mutu & spesifikasi beton terbaik)',
      'Keunggulan operasional (paling efisien, cepat, harga kompetitif)',
      'Kombinasi — jelaskan di bagian berikutnya'
    ])
    .setRequired(true);

  form.addScaleItem()
    .setTitle('9. Seberapa kuat keterkaitan brand VUB dengan induknya (Victory Utama Group) perlu ditonjolkan dalam komunikasi?')
    .setBounds(1, 5)
    .setLabels('Berdiri sendiri tanpa menonjolkan induk', 'Sangat menonjolkan sebagai bagian dari Group')
    .setRequired(true);

  // ============================================================
  // BAGIAN 3 — Analisis Pelanggan (Consumer)
  // ============================================================
  form.addPageBreakItem()
    .setTitle('BAGIAN 3 — Analisis Pelanggan (Consumer)');

  form.addCheckboxItem()
    .setTitle('10. Siapa pelanggan utama VUB saat ini? (boleh lebih dari satu)')
    .setChoiceValues([
      'Kontraktor BUMN / proyek pemerintah',
      'Kontraktor swasta besar',
      'Developer properti / perumahan',
      'Kontraktor proyek industri (pabrik/kawasan industri)',
      'Proyek perorangan / skala kecil',
      'Mitra/investor asing (mis. Tiongkok)'
    ])
    .showOtherOption(true)
    .setRequired(true);

  form.addTextItem()
    .setTitle('11. Dari segmen di atas, mana yang PALING menguntungkan dan ingin kita prioritaskan ke depan?')
    .setRequired(true);

  // Q12 [Rank/Skala] — Google Form tidak punya field "ranking" asli,
  // jadi didekati dengan grid pilihan ganda: baris = faktor, kolom = peringkat 1–6.
  form.addGridItem()
    .setTitle('12. Saat seorang klien memutuskan membeli beton, urutkan faktor yang paling menentukan keputusan mereka.')
    .setHelpText('Beri peringkat 1–6 untuk tiap faktor (1 = paling menentukan, 6 = paling tidak menentukan). Usahakan tiap peringkat hanya dipakai satu kali.')
    .setRows([
      'Harga',
      'Mutu & konsistensi beton',
      'Ketepatan waktu pengiriman',
      'Kapasitas & jaminan pasokan kontinu',
      'Reputasi & pengalaman proyek',
      'Kemudahan komunikasi & layanan'
    ])
    .setColumns(['1', '2', '3', '4', '5', '6'])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('13. Masalah / kekhawatiran terbesar apa yang biasanya dirasakan klien sebelum memilih pemasok beton?')
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('14. Bagaimana biasanya klien pertama kali mengenal / menemukan VUB?')
    .setChoiceValues([
      'Rekomendasi / mulut ke mulut',
      'Relasi dari Victory Utama Group',
      'Tender / undangan proyek',
      'Instagram / media sosial',
      'Website',
      'Pameran / event infrastruktur'
    ])
    .showOtherOption(true)
    .setRequired(true);

  // ============================================================
  // BAGIAN 4 — Analisis Pesaing (Competitor)
  // ============================================================
  form.addPageBreakItem()
    .setTitle('BAGIAN 4 — Analisis Pesaing (Competitor)');

  form.addParagraphTextItem()
    .setTitle('15. Sebutkan 3–5 pesaing utama VUB (lokal maupun nasional).')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('16. Dibanding pesaing tersebut, di hal apa VUB lebih unggul? Dan di hal apa pesaing lebih unggul dari kita?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('17. Menurut Anda, apa satu hal yang BISA kita klaim tapi belum diklaim kuat oleh pesaing mana pun?')
    .setRequired(true);

  // ============================================================
  // BAGIAN 5 — Positioning & Pesan Merek
  // ============================================================
  form.addPageBreakItem()
    .setTitle('BAGIAN 5 — Positioning & Pesan Merek');

  form.addParagraphTextItem()
    .setTitle('18. Lengkapi kalimat ini: "Bagi [target klien], VUB adalah pemasok beton yang ______, karena ______."')
    .setRequired(true);

  form.addTextItem()
    .setTitle('19. Apa SATU kesan/kata yang Anda ingin langsung muncul di benak klien saat mendengar nama Victory Utama Beton?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('20. Hal mendasar apa yang WAJIB dimiliki pemasok beton agar dianggap layak (mis. sertifikasi mutu, lab uji, armada)? Apakah VUB sudah memenuhinya?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('21. Adakah pesan/klaim yang sebaiknya kita HINDARI karena berisiko atau tidak bisa kita penuhi?')
    .setRequired(false);

  // ============================================================
  // BAGIAN 6 — Identitas Visual & Konsistensi
  // ============================================================
  form.addPageBreakItem()
    .setTitle('BAGIAN 6 — Identitas Visual & Konsistensi');

  form.addMultipleChoiceItem()
    .setTitle('22. Saat ini, mana yang lebih sering dipakai dan dikenal klien?')
    .setChoiceValues([
      '"Victory Utama Beton" (nama lengkap)',
      '"Victory Beton" (seperti di logo)',
      'Keduanya dipakai bergantian',
      'Tidak yakin'
    ])
    .setRequired(true);

  form.addScaleItem()
    .setTitle('23. Apakah Anda merasa logo & tampilan VUB saat ini sudah mencerminkan kualitas perusahaan?')
    .setBounds(1, 5)
    .setLabels('Sama sekali belum', 'Sudah sangat mencerminkan')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('24. Warna/kesan visual apa yang menurut Anda cocok mewakili VUB? (mis. biru = terpercaya, oranye = energi)')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('25. Di media/titik sentuh mana branding VUB paling sering terlihat klien? (truk mixer, seragam, proposal, IG, plang plant, dll.)')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('26. Apakah komunikasi bilingual (mis. Mandarin) perlu dipertahankan karena ada segmen mitra asing?')
    .setChoiceValues([
      'Ya, penting untuk mitra asing',
      'Tidak perlu',
      'Hanya untuk dokumen tertentu'
    ])
    .setRequired(true);

  // ============================================================
  // BAGIAN 7 — Visi ke Depan & Masukan Bebas
  // ============================================================
  form.addPageBreakItem()
    .setTitle('BAGIAN 7 — Visi ke Depan & Masukan Bebas');

  form.addParagraphTextItem()
    .setTitle('27. Dalam 3–5 tahun ke depan, VUB ingin dikenal sebagai apa di industri beton Indonesia?')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('28. Adakah hal penting tentang VUB yang belum tertanyakan di atas, namun perlu kami tahu untuk merancang branding?')
    .setRequired(false);

  // Pesan penutup
  form.setConfirmationMessage('Terima kasih. Jawaban Anda akan menjadi fondasi perancangan branding VUB.');

  // Cetak tautan ke Execution log
  Logger.log('✅ Form berhasil dibuat!');
  Logger.log('Link ISI (bagikan ke responden) : ' + form.getPublishedUrl());
  Logger.log('Link EDIT (untuk Anda)          : ' + form.getEditUrl());
}
