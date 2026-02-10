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
    accountNumber: "Account Number",
    footer: "© 2026 Roto Pak. All rights reserved.",
  },
  el: {
    tagline: "Παραγωγη Πλαστικων Φιλμ & Ρολων",
    description: "Παραγωγη πλαστικων ρολων και μεμβρανων για συσκευασια τροφιμων, μαγειρικη και βιομηχανικες εφαρμογες.",
    companyInfo: "Στοιχεια Εταιρειας",
    companyName: "Επωνυμια",
    activity: "Δραστηριοτητα",
    legalForm: "Νομικη Μορφη",
    vatNumber: "ΑΦΜ",
    taxOffice: "ΔΟΥ",
    gemi: "Αριθμος ΓΕΜΗ",
    address: "Εδρα",
    contact: "Στοιχεια Επικοινωνιας",
    phone: "Τηλεφωνο",
    email: "Email",
    banking: "Τραπεζικα Στοιχεια",
    bank: "Τραπεζα",
    iban: "IBAN",
    accountNumber: "Αριθμος Λογαριασμου",
    footer: "© 2026 ROTOPACK IKE. Με επιφυλαξη παντος δικαιωματος.",
  },
};

// Company data
const companyData = {
  name: "ROTOPACK IKE",
  activity: {
    en: "Other Printing Services / Plastic Film Manufacturing",
    el: "Αλλες Υπηρεσιες Εκτυπωσης / Παραγωγη Πλαστικων Φιλμ",
  },
  legalForm: { en: "Private Company (IKE)", el: "Ιδιωτικη Κεφαλαιουχικη Εταιρεια (ΙΚΕ)" },
  vatNumber: "802557426",
  taxOffice: { en: "KEFODE ATTIKIS", el: "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ" },
  gemi: "178566201000",
  address: {
    en: "22 Pergamou Street, Egaleo 12242, Greece",
    el: "Οδος Περγαμου 22, Αιγαλεω 12242, Ελλαδα",
  },
  phone: "+30 694 422 3193",
  email: "stamnik@yahoo.com",
  bank: { en: "National Bank of Greece", el: "Εθνικη Τραπεζα της Ελλαδος" },
  iban: "GR73 0110 0910 0000 0910 1750 991",
  accountNumber: "09101750991",
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "el">("en");
  const t = content[lang];

  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">ROTOPACK</h1>
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
          <span className="info-label">{t.accountNumber}</span>
          <span className="info-value">{companyData.accountNumber}</span>
        </div>
      </div>

      <footer className="footer">{t.footer}</footer>
    </div>
  );
}
