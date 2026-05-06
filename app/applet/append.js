const fs = require('fs');

const appendix = `,
  {
    "id": "1027",
    "title": "Key Takeaways",
    "description": "Mengidentifikasi 5 takeaways utama dari buku untuk skenario bisnis.",
    "content": "Identify the top 5 actionable takeaways from **[book title]** and explain how each could be applied in a real-world business scenario.",
    "category": "Ekstrak Info Buku"
  },
  {
    "id": "1028",
    "title": "Case Studies",
    "description": "Meringkas poin kunci dari studi kasus terkait dengan pesan utama.",
    "content": "Identify any case studies presented in **[book title]**. Summarize their key points and explain how they support the book's overall message.",
    "category": "Ekstrak Info Buku"
  },
  {
    "id": "1029",
    "title": "Book Comparison",
    "description": "Membandingkan prinsip kunci dari beberapa buku yang relevan.",
    "content": "Compare and contrast the key principles in **[book title]** with those in **[another relevant book]**. What are the similarities and differences? How do they complement or contradict each other?",
    "category": "Ekstrak Info Buku"
  },
  {
    "id": "1030",
    "title": "Explain to Different Audiences",
    "description": "Menjelaskan konsep dalam berbagai gaya: pelajar, CEO, mahasiswa karir.",
    "content": "In **[book title]**, the author discusses **[concept]**. Explain this concept as if you were teaching: a) A high school student b) A seasoned CEO c) A student considering a career in this field. How does the explanation differ for each audience?",
    "category": "Ekstrak Info Buku"
  },
  {
    "id": "1031",
    "title": "Apply to Different Businesses",
    "description": "Terapkan strategi bisnis untuk startup, restoran keluarga, atau perusahaan.",
    "content": "Imagine you're implementing the strategies from **[book title]** in: a) A tech startup b) A family-owned restaurant c) A large multinational corporation. What would be the specific challenges and opportunities in each scenario?",
    "category": "Ekstrak Info Buku"
  },
  {
    "id": "1032",
    "title": "Use Frameworks",
    "description": "Menganalisis cerita sukses dan kegagalan bisnis dari kerangka kerja spesifik.",
    "content": "In **[book title]**, the author presents **[specific framework or model]**. Apply this framework to analyze: a) A recent business success story b) A notable business failure. What insights does this analysis provide?",
    "category": "Ekstrak Info Buku"
  },
  {
    "id": "1033",
    "title": "Create Action Plan",
    "description": "Rencana tindakan selama 30 hari untuk pemimpin bisnis berdasarkan isi.",
    "content": "Based on the principles outlined in **[book title]**, create a hypothetical 30-day action plan for a business leader looking to implement these ideas.",
    "category": "Ekstrak Info Buku"
  },
  {
    "id": "1034",
    "title": "Potential Weaknesses",
    "description": "Menganalisa kritik potensial atau batasan dari ide buku.",
    "content": "What are the potential criticisms or limitations of the ideas presented in **[book title]**? How might these be addressed?",
    "category": "Ekstrak Info Buku"
  },
  {
    "id": "1035",
    "title": "Main Idea",
    "description": "Merangkum tesis sentral dalam satu kalimat dan menjabarkannya.",
    "content": "Summarize the main thesis of **[book title]** in one sentence, then expand on how this central idea is developed throughout the book.",
    "category": "Ekstrak Info Buku"
  },
  {
    "id": "1036",
    "title": "Analyze Quotes",
    "description": "Ekstrak kutipan tak terlupakan dan jelaskan urgensinya.",
    "content": "Extract 3-5 memorable quotes from **[book title]**. For each quote, explain its context, significance, and how it encapsulates a key lesson from the book.",
    "category": "Ekstrak Info Buku"
  },
  {
    "id": "1037",
    "title": "Explain Like I'm 5",
    "description": "Penjelasan konsep dengan perumpamaan sangat sederhana (seperti usia 5 tahun).",
    "content": "Explain **[insert concept or topic]** as if you were talking to a 5-year-old child. Use simple language and everyday examples.",
    "category": "Belajar Cepat"
  },
  {
    "id": "1038",
    "title": "Examples and Analogies",
    "description": "Gunakan contoh nyata dan analogi yang mudah dicerna pemula.",
    "content": "Explain **[insert concept or topic]** using three different real-world examples or analogies that would be easy for a beginner to understand.",
    "category": "Belajar Cepat"
  },
  {
    "id": "1039",
    "title": "Motivation",
    "description": "Menyusun strategi motivasi untuk menjaga konsistensi belajar.",
    "content": "I'm struggling to stay motivated while learning **[insert subject or skill]**. Provide me with 5 practical strategies to boost my motivation and maintain consistency in my studies.",
    "category": "Belajar Cepat"
  },
  {
    "id": "1040",
    "title": "Role-Play",
    "description": "Berlatih membalas pembicaraan dari skenario simulasi role-play.",
    "content": "Let's role-play a scenario where I'm **[insert role]** and you're **[insert another role]**. We'll practice **[insert skill or situation]**. Begin the scenario, and I'll respond accordingly.",
    "category": "Belajar Cepat"
  },
  {
    "id": "1041",
    "title": "Study Plan",
    "description": "Rencana belajar komprehensif, mencakup goals dan milestone.",
    "content": "Create a detailed study plan for learning **[insert subject or skill]** over the course of **[insert time frame]**. Include specific goals, resources, and milestones.",
    "category": "Belajar Cepat"
  },
  {
    "id": "1042",
    "title": "Quiz",
    "description": "Pembuat 10 pertanyaan kuis, esai, dan penjelasan.",
    "content": "Generate a 10-question quiz on **[insert topic]**, including a mix of multiple-choice, true/false, and short-answer questions. Provide answers and brief explanations for each question.",
    "category": "Belajar Cepat"
  },
  {
    "id": "1043",
    "title": "Mindmap",
    "description": "Pembuatan mind map mendetail dengan cabang besar dan bagian.",
    "content": "Create a detailed mind map for the topic **[insert topic]**. Include main branches, sub-branches, and key concepts or ideas for each.",
    "category": "Belajar Cepat"
  },
  {
    "id": "1044",
    "title": "Expert Roundtable",
    "description": "Diskusi simulasi antara pakar ahli dengan perbedaan opini di lapangan.",
    "content": "Simulate a roundtable discussion with me and three experts in **[insert field]** discussing **[insert topic or question]**. Present their different viewpoints and any potential areas of agreement or disagreement.",
    "category": "Belajar Cepat"
  },
  {
    "id": "1045",
    "title": "Mental Associations",
    "description": "Latih ingatan menggunakan perangkat Mnemonic untuk informasi panjang.",
    "content": "Help me create mental associations or mnemonic devices to remember key information about **[insert topic or concept]**.",
    "category": "Belajar Cepat"
  },
  {
    "id": "1046",
    "title": "Improve What You Have",
    "description": "Analisis dari karya eksisting Anda untuk aspek kejelihan, persuasi, dsb.",
    "content": "Here's something I've [written/created/produced]: **[insert your work]**. Please provide specific suggestions to improve it, focusing on **[aspect you want to improve, e.g., clarity, structure, persuasiveness]**. Explain why each change would make it better.",
    "category": "Belajar Cepat"
  },
  {
    "id": "1047",
    "title": "Zero-Shot Prompting",
    "description": "Memahami metode awal prompt tanpa contoh referensi internal AI.",
    "content": "Cara kerja: Bertanya langsung tanpa memberikan contoh sebelumnya. Mengandalkan murni pengetahuan internal AI.\\n\\nContoh Penggunaan: \\n\\\"[Prompt Anda tanpa memberi contoh output]\\\"",
    "category": "Teknik AI"
  },
  {
    "id": "1048",
    "title": "One-Shot Prompting",
    "description": "Gunakan 1 contoh eksklusif agar memancing format output yang ditiru AI.",
    "content": "Cara kerja: Memberikan tepat 1 contoh *output* yang diharapkan di dalam prompt untuk membantu AI meniru format tersebut.\\n\\nContoh Penggunaan:\\n\\\"Buat deskripsi produk:\\nNama: Sabun Bunga\\nDeskripsi: Wangi segar sepanjang hari.\\n\\nNama: [Produk Anda]\\nDeskripsi:\\\"",
    "category": "Teknik AI"
  },
  {
    "id": "1049",
    "title": "Few-Shot Prompting",
    "description": "Menyediakan banyak referensi (2-5) pola format penulisan spesifik untuk merajut prompt.",
    "content": "Cara kerja: Memberikan beberapa contoh (2-5) di dalam prompt agar AI bisa mengenali pola gaya atau tipe konten yang diinginkan.",
    "category": "Teknik AI"
  },
  {
    "id": "1050",
    "title": "Chain-of-Thought (CoT)",
    "description": "Pengarahan bertahap memecahkan tugas / logika runut sebelum ambil hasil.",
    "content": "Cara kerja: Meminta AI berpikir secara bertahap (contoh: menyisipkan kalimat \\\"Think step-by-step\\\") untuk menyelesaikan masalah kompleks.",
    "category": "Teknik AI"
  },
  {
    "id": "1051",
    "title": "Self-Consistency Prompting",
    "description": "Memperhitungkan generasi jawaban majemuk kemudian ambil dari jalur yang seragam.",
    "content": "Cara kerja: Menghasilkan beberapa jalur penalaran (generasi ganda) untuk satu pertanyaan dan memilih jawaban yang paling konsisten/mayoritas.",
    "category": "Teknik AI"
  },
  {
    "id": "1052",
    "title": "Role-Based Prompting",
    "description": "Instruksi memerankan persona keahlian agar tanggapannya disesuaikan perannya.",
    "content": "Cara kerja: Menginstruksikan AI untuk mengadopsi persona/peran tertentu (contoh: \\\"Bertindaklah sebagai ahli SEO...\\\") agar respons sesuai dengan keahlian tersebut.",
    "category": "Teknik AI"
  },
  {
    "id": "1053",
    "title": "Instruction Tuning",
    "description": "Deskripsi terstruktur tugas mendetail tanpa membingungkan bahasa alaminya.",
    "content": "Cara kerja: Memberikan instruksi spesifik dan terstruktur dengan sangat detail mengenai tugas yang harus dilakukan.",
    "category": "Teknik AI"
  },
  {
    "id": "1054",
    "title": "ReAct (Reasoning + Action)",
    "description": "Berpikir penalaran sambil beraksi aktual memakai akses luar.",
    "content": "Cara kerja: Menggabungkan penalaran AI dengan tindakan nyata (seperti memanggil API atau mencari ke database eksternal) untuk respons yang lebih akurat.",
    "category": "Teknik AI"
  }
];
`;

let content = fs.readFileSync('src/data/prompts.ts', 'utf8');
content = content.replace(/\];\s*$/, appendix);
fs.writeFileSync('src/data/prompts.ts', content);
console.log('Done appending');
