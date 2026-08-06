import { footer, siteConfig } from "@/config/copy";

export function Footer() {
  return (
    <footer className="v-footer">
      <div className="v-container">
        <div className="v-footer-grid">
          <div>
            <span className="v-wordmark v-mb-md v-wordmark-block">{siteConfig.name}</span>
            <p className="v-body-sm v-body-constrained v-mt-xs">{siteConfig.tagline}</p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <p className="v-footer-heading">{col.heading}</p>
              {col.links.map((link) => (
                <a key={link.label} href={link.href} className="v-footer-link">{link.label}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="v-footer-bottom">
          <p className="v-body-sm">{footer.copyright}</p>
          <p className="v-body-sm">{footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
