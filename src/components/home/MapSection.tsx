"use client";

export default function MapSection() {
  // ASN Builders office location (Masjid Market, Bank Town, Savar, Dhaka)
  const mapSrc =
    "https://www.google.com/maps?q=Masjid%20Market%2C%20Bank%20Town%2C%20Savar%2C%20Dhaka&output=embed";

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Our Location
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Visit Our Office
            </h2>
            <p className="mt-2 max-w-2xl text-slate-500">
              Masjid Market, Bank Town, Savar, Dhaka — site visit & meeting
              schedule available.
            </p>
          </div>

          <a
            href="https://www.google.com/maps?q=Masjid+Market,+Bank+Town,+Savar,+Dhaka"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Open in Google Maps
          </a>
        </div>

        {/* Map Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[16/9] w-full">
            <iframe
              title="ASN Builders Location Map"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />
          </div>

          {/* Footer info bar */}
          <div className="flex flex-col gap-3 border-t border-slate-200 p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Masjid Market • Bank Town • Savar • Dhaka
              </p>
              <p className="text-sm text-slate-500">
                For directions & site visit, open the map or contact us.
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Masjid%20Market%2C%20Bank%20Town%2C%20Savar%2C%20Dhaka"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Get Directions
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
