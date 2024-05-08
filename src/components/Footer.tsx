import "./Estilos/Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbClockHour9Filled } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
export const Footer = () => {
  return (
    <footer className="section-Footer flex items-center ">
      <div className="footer-contenedor container m-auto  md:flex-row md:gap-8 md:items-start">
        <div className="hour md:mb-[0rem]">
          <h2 className="Footer-h2">Horio:</h2>
          <div className="group">
            <p className="hour-Description">
              <TbClockHour9Filled />
              <span>Lunes 10:00 am - 22:00 pm</span>
            </p>
            <p className="hour-Description">
              <TbClockHour9Filled />
              <span>Martes 10:00 am - 22:00 pm</span>
            </p>
            <p className="hour-Description">
              <TbClockHour9Filled />
              <span>Miercoles 10:00 am - 22:00 pm</span>
            </p>
            <p className="hour-Description">
              <TbClockHour9Filled />
              <span>Jueves 10:00 am - 22:00 pm</span>
            </p>
            <p className="hour-Description">
              <TbClockHour9Filled />
              <span>Viernes 10:00 am - 22:00 pm</span>
            </p>
            <p className="hour-Description">
              <TbClockHour9Filled />
              <span>Sábado 10:00 am - 22:00 pm</span>
            </p>
            <p className="hour-Description">
              <TbClockHour9Filled />
              <span>Domingo 10:00 am - 22:00 pm</span>
            </p>
          </div>
        </div>
        {/* ---------------------------------------------------------- */}
        <div className="location md:mb-[0rem]">
          <h2 className="Footer-h2">Localizanos en:</h2>
          <div className="location-body">
            <p className="location-Description">
              <FaLocationDot />
              <div className="addres">
                <span>Centro Comercial Neptuno</span>
                <span>Arabial, 45, Ronda, 18004 Granada</span>
              </div>
            </p>
            <p className="location-Description">
              <FaPhoneAlt />
              <a href="tel:652677715">652 67 77 15</a>
            </p>
          </div>
          <div className="divisor"></div>
          <div className="location-body">
            <p className="location-Description">
              <FaLocationDot />
              <div className="addres">
                <span>Armilla</span>
                <span>C/ Sol, 9, 18100 Granada</span>
              </div>
            </p>
            <p className="location-Description">
              <FaPhoneAlt />
              <a href="tel:605103653">605 10 36 53</a>
            </p>
          </div>
        </div>
        {/* ----------------------------------------------------------- */}
        <div className="social md:mb-[0rem]">
          <h2 className="Footer-h2"> Redes Sociales: </h2>
          <div className="social-Body">
            <p className="social-Description mb-6">
              <FaFacebook className="text-blue-600 size-6" />
              <a
                href="https://www.facebook.com/Elmestizogranada/"
                target="_blank">Facebook
              </a>
            </p>
            <p className="social-Description">
              <FaSquareInstagram className="text-violet-800 size-6"/>
              <a
                href="https://www.instagram.com/elmestizogranada/"
                target="_blank">Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------ */}
      <div className="author">
        <span> © 2024{" "}
          <a className="text-blue-500" href="https://github.com/lel20" target="_blank">Leonardo Paredes
          </a>– Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};
