"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/Button";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Nama
        <input type="text" name="name" placeholder="Nama kamu" required />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="kamu@email.com" required />
      </label>
      <label>
        Pesan
        <textarea
          name="message"
          rows={5}
          placeholder="Mau reservasi meja, tanya soal acara, atau sekadar menyapa Si Guk?"
          required
        />
      </label>
      <Button type="submit">Kirim Pesan</Button>
      {sent && (
        <p className="form__success" role="status">
          Terima kasih! Pesanmu sudah kami terima. Si Guk akan segera membalas!!
        </p>
      )}
    </form>
  );
}
