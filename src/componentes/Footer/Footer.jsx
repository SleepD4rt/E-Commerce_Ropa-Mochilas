import {
  FooterContainer,
  FooterContent,
  ContentMediosFormas,
  ContentMedios,
  Medios,
  ContentFormas,
  Formas,
  ContentContacto,
  Contacto,
} from "./FooterStyled";

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <ContentMediosFormas>
          <h3>METODOS DE PAGO</h3>
          <ContentMedios>
            <Medios>
              <img
                src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"
                alt=""
              />
            </Medios>
            <Medios>
              <img
                src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"
                alt=""
              />
            </Medios>
            <Medios>
              <img
                src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png"
                alt=""
              />
            </Medios>
            <Medios>
              <img
                src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png"
                alt=""
              />
            </Medios>
            <Medios>
              <img
                src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png"
                alt=""
              />
            </Medios>
            <Medios>
              <img
                src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png"
                alt=""
              />
            </Medios>
            <Medios>
              <img
                src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png"
                alt=""
              />
            </Medios>
            <Medios>
              <img
                src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-shopping@2x.png"
                alt=""
              />
            </Medios>
            <Medios>
              <img
                src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png"
                alt=""
              />
            </Medios>
            <Medios>
              <img
                src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/argencard@2x.png"
                alt=""
              />
            </Medios>
            <Medios>
              <img
                src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/pagofacil@2x.png"
                alt=""
              />
            </Medios>
            <Medios>
              <img
                src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/rapipago@2x.png"
                alt=""
              />
            </Medios>
          </ContentMedios>
          <h3>FORMAS DE ENVIO</h3>
          <ContentFormas>
            <Formas>
              <img
                src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/table@2x.png"
                alt=""
              />
            </Formas>
            <Formas>
              <img
                src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/api/3336@2x.png"
                alt=""
              />
            </Formas>
          </ContentFormas>
        </ContentMediosFormas>
        <ContentContacto>
          <h3>CONTACTANOS</h3>
          <Contacto></Contacto>
          <Contacto></Contacto>
        </ContentContacto>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
