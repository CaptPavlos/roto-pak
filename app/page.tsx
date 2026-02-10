"use client";

import { useState } from "react";

const content = {
  en: {
    tagline: "Plastic Film & Roll Manufacturing",
    description: "Manufacturer of plastic rolls and films for food packaging, cooking, and industrial applications.",
    companyInfo: "Company Information",
    companyName: "Company Name",
    activity: "Business Activity",
    legalForm: "Legal Form",
    vatNumber: "VAT Number (ΑΦΜ)",
    taxOffice: "Tax Office",
    gemi: "GEMI Number",
    address: "Registered Address",
    contact: "Contact Information",
    phone: "Phone",
    email: "Email",
    banking: "Banking Details",
    bank: "Bank",
    iban: "IBAN",
    swift: "SWIFT/BIC",
    footer: "© 2026 Roto Pak. All rights reserved.",
  },
  el: {
    tagline: "Παραγωγή Πλαστικών Φιλμ & Ρολών",
    description: "Παραγωγή πλαστικών ρολών και μεμβρανών για συσκευασία τροφίμων, μαγειρική και βιομηχανικές εφαρμογές.",
    companyInfo: "Στοιχεία Εταιρείας",
    companyName: "Επωνυμία",
    activity: "Δραστηριότητα",
    legalForm: "Νομική Μορφή",
    vatNumber: "ΑΦΜ",
    taxOffice: "ΔΟΥ",
    gemi: "Αριθμός ΓΕΜΗ",
    address: "Έδρα",
    contact: "Στοιχεία Επικοινωνίας",
    phone: "Τηλέφωνο",
    email: "Email",
    banking: "Τραπεζικά Στοιχεία",
    bank: "Τράπεζα",
    iban: "IBAN",
    swift: "SWIFT/BIC",
    footer: "© 2026 Roto Pak. Με επιφύλαξη παντός δικαιώματος.",
  },
};

// Company data - UPDATE THESE WITH REAL INFO
const companyData = {
  name: "ROTO PAK",
  activity: {
    en: "Manufacture of plastic rolls & films for food packaging and industrial use",
    el: "Παραγωγή πλαστικών ρολών & μεμβρανών για συσκευασία τροφίμων και βιομηχανική χρήση",
  },
  legalForm: { en: "Sole Proprietorship", el: "Ατομική Επιχείρηση" },
  vatNumber: "000000000", // Replace with real ΑΦΜ
  taxOffice: { en: "Athens", el: "Αθηνών" }, // Replace with real ΔΟΥ
  gemi: "000000000000", // Replace with real ΓΕΜΗ
  address: {
    en: "Address, City, Postal Code, Greece",
    el: "Διεύθυνση, Πόλη, Τ.Κ., Ελλάδα",
  },
  phone: "+30 210 000 0000", // Replace with real phone
  email: "info@rotopak.gr", // Replace with real email
  bank: { en: "Bank Name", el: "Όνομα Τράπεζας" },
  iban: "GR00 0000 0000 0000 0000 0000 000", // Replace with real IBAN
  swift: "XXXXGRAA", // Replace with real SWIFT
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "el">("en");
  const t = content[lang];

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">ROTO PAK</h1>
        <p className="tagline">{t.tagline}</p>
        <p style={{ marginTop: "12px", color: "#a0aec0", fontSize: "0.95rem", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
          {t.description}
        </p>
      </header>

      <div className="lang-toggle">
        <button
          className={`lang-btn ${lang === "en" ? "active" : ""}`}
          onClick={() => setLang("en")}
        >
          English
        </button>
        <button
          className={`lang-btn ${lang === "el" ? "active" : ""}`}
          onClick={() => setLang("el")}
        >
          Ελληνικά
        </button>
      </div>

      <div className="card">
        <h2>🏢 {t.companyInfo}</h2>
        <div className="info-row">
          <span className="info-label">{t.companyName}</span>
          <span className="info-value">{companyData.name}</span>
        </div>
        <div className="info-row">
          <span className="info-label">{t.activity}</span>
          <span className="info-value">{companyData.activity[lang]}</span>
        </div>
        <div className="info-row">
          <span className="info-label">{t.legalForm}</span>
          <span className="info-value">{companyData.legalForm[lang]}</span>
        </div>
        <div className="info-row">
          <span className="info-label">{t.vatNumber}</span>
          <span className="info-value">{companyData.vatNumber}</span>
        </div>
        <div className="info-row">
          <span className="info-label">{t.taxOffice}</span>
          <span className="info-value">{companyData.taxOffice[lang]}</span>
        </div>
        <div className="info-row">
          <span className="info-label">{t.gemi}</span>
          <span className="info-value">{companyData.gemi}</span>
        </div>
        <div className="info-row">
          <span className="info-label">{t.address}</span>
          <span className="info-value">{companyData.address[lang]}</span>
        </div>
      </div>

      <div className="card">
        <h2>📞 {t.contact}</h2>
        <div className="info-row">
          <span className="info-label">{t.phone}</span>
          <span className="info-value">
            <a href={`tel:${companyData.phone}`}>{companyData.phone}</a>
          </span>
        </div>
        <div className="info-row">
          <span className="info-label">{t.email}</span>
          <span className="info-value">
            <a href={`mailto:${companyData.email}`}>{companyData.email}</a>
          </span>
        </div>
      </div>

      <div className="card">
        <h2>🏦 {t.banking}</h2>
        <div className="info-row">
          <span className="info-label">{t.bank}</span>
          <span className="info-value">{companyData.bank[lang]}</span>
        </div>
        <div className="info-row">
          <span className="info-label">{t.iban}</span>
          <span className="info-value">{companyData.iban}</span>
        </div>
        <div className="info-row">
          <span className="info-label">{t.swift}</span>
          <span className="info-value">{companyData.swift}</span>
        </div>
      </div>

      <footer className="footer">{t.footer}</footer>
    </div>
  );
}
