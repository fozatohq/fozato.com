import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              &copy; Fozato.com - All rights reserved.
            </div>
          </div>

          {/* 2nd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Features
                </Link>
              </li>
              {/* <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Integrations
                </Link>
              </li> */}
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Pricing & Plans
                </Link>
              </li>
              {/* <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Our method
                </Link>
              </li> */}
            </ul>
          </div>

          {/* 3rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Diversity & Inclusion
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Blog
                </Link>
              </li>
              {/* <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Financial statements
                </Link>
              </li> */}
            </ul>
          </div>

          {/* 4th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Terms of service
                </Link>
              </li>
              {/* <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Report a vulnerability
                </Link>
              </li> */}
            </ul>
          </div>

          {/* 5th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="flex gap-1">
              <li>
                <Link
                  className="flex items-center justify-center text-red-500 transition hover:text-red-600"
                  href="#0"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6009 0H15.0544L9.69434 6.12617L16 14.4625H11.0627L7.19566 9.40657L2.77087 14.4625H0.31595L6.04904 7.90989L0 0H5.06262L8.55811 4.62133L12.6009 0ZM11.7399 12.994H13.0993L4.32392 1.39137H2.86506L11.7399 12.994Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-red-500 transition hover:text-red-600"
                  href="#0"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00075 0C5.82806 0 5.55539 0.00950026 4.70205 0.048334C3.85037 0.0873344 3.26903 0.222169 2.76036 0.420005C2.23419 0.62434 1.78785 0.897676 1.34318 1.34251C0.898176 1.78719 0.62484 2.23352 0.419838 2.75953C0.221502 3.26837 0.0865008 3.84988 0.0481671 4.70122C0.01 5.55456 0 5.8274 0 8.00009C0 10.1728 0.00966692 10.4446 0.048334 11.298C0.0875011 12.1496 0.222336 12.731 0.420004 13.2396C0.624507 13.7658 0.897843 14.2122 1.34268 14.6568C1.78719 15.1018 2.23352 15.3758 2.75936 15.5802C3.26837 15.778 3.84987 15.9128 4.70138 15.9518C5.55472 15.9907 5.82723 16.0002 7.99975 16.0002C10.1726 16.0002 10.4444 15.9907 11.2978 15.9518C12.1495 15.9128 12.7315 15.778 13.2405 15.5802C13.7665 15.3758 14.2121 15.1018 14.6567 14.6568C15.1017 14.2122 15.375 13.7658 15.58 13.2398C15.7767 12.731 15.9117 12.1495 15.9517 11.2981C15.99 10.4448 16 10.1728 16 8.00009C16 5.8274 15.99 5.55473 15.9517 4.70138C15.9117 3.84971 15.7767 3.26837 15.58 2.7597C15.375 2.23352 15.1017 1.78719 14.6567 1.34251C14.2116 0.89751 13.7666 0.624174 13.24 0.420005C12.73 0.222169 12.1483 0.0873344 11.2966 0.048334C10.4433 0.00950026 10.1716 0 7.99825 0H8.00075ZM7.28308 1.44168C7.49608 1.44135 7.73375 1.44168 8.00075 1.44168C10.1368 1.44168 10.3899 1.44935 11.2335 1.48768C12.0135 1.52335 12.4368 1.65368 12.7188 1.76319C13.0921 1.90819 13.3583 2.08152 13.6381 2.36153C13.9181 2.64153 14.0915 2.9082 14.2368 3.28154C14.3463 3.56321 14.4768 3.98654 14.5123 4.76655C14.5507 5.60989 14.559 5.86323 14.559 7.99825C14.559 10.1333 14.5507 10.3866 14.5123 11.23C14.4767 12.01 14.3463 12.4333 14.2368 12.715C14.0918 13.0883 13.9181 13.3541 13.6381 13.634C13.3581 13.914 13.0923 14.0873 12.7188 14.2323C12.4371 14.3423 12.0135 14.4723 11.2335 14.508C10.3901 14.5463 10.1368 14.5547 8.00075 14.5547C5.86456 14.5547 5.61139 14.5463 4.76805 14.508C3.98804 14.472 3.5647 14.3417 3.28253 14.2322C2.9092 14.0872 2.64253 13.9138 2.36252 13.6338C2.08252 13.3538 1.90919 13.0878 1.76385 12.7143C1.65435 12.4326 1.52385 12.0093 1.48835 11.2293C1.45002 10.3859 1.44235 10.1326 1.44235 7.99625C1.44235 5.8599 1.45002 5.60789 1.48835 4.76455C1.52402 3.98454 1.65435 3.56121 1.76385 3.2792C1.90885 2.90586 2.08252 2.6392 2.36252 2.35919C2.64253 2.07919 2.9092 1.90585 3.28253 1.76052C3.56454 1.65052 3.98804 1.52052 4.76805 1.48468C5.50606 1.45135 5.79206 1.44135 7.28308 1.43968V1.44168ZM12.2711 2.77003C11.7411 2.77003 11.3111 3.19953 11.3111 3.72971C11.3111 4.25971 11.7411 4.68972 12.2711 4.68972C12.8011 4.68972 13.2311 4.25971 13.2311 3.72971C13.2311 3.1997 12.8011 2.7697 12.2711 2.7697V2.77003ZM8.00075 3.89171C5.73189 3.89171 3.89237 5.73123 3.89237 8.00009C3.89237 10.2689 5.73189 12.1076 8.00075 12.1076C10.2696 12.1076 12.1085 10.2689 12.1085 8.00009C12.1085 5.73123 10.2696 3.89171 8.00075 3.89171ZM8.00075 5.33339C9.47343 5.33339 10.6674 6.52724 10.6674 8.00009C10.6674 9.47277 9.47343 10.6668 8.00075 10.6668C6.5279 10.6668 5.33406 9.47277 5.33406 8.00009C5.33406 6.52724 6.5279 5.33339 8.00075 5.33339Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-red-500 transition hover:text-red-600"
                  href="#0"
                  aria-label="Youtube"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.649 1.78428C16 3.0128 16 5.64534 16 5.64534C16 5.64534 16 8.24863 15.649 9.5064C15.4735 10.2084 14.9177 10.7349 14.245 10.9104C12.9872 11.2322 8.01463 11.2322 8.01463 11.2322C8.01463 11.2322 3.0128 11.2322 1.75503 10.9104C1.08227 10.7349 0.526508 10.2084 0.351005 9.5064C0 8.24863 0 5.64534 0 5.64534C0 5.64534 0 3.0128 0.351005 1.78428C0.526508 1.08227 1.08227 0.526508 1.75503 0.351006C3.0128 0 8.01463 0 8.01463 0C8.01463 0 12.9872 0 14.245 0.351006C14.9177 0.526508 15.4735 1.08227 15.649 1.78428ZM6.3766 8.01463L10.5302 5.64534L6.3766 3.27605V8.01463Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Fozato'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Fozato'] after:[text-shadow:0_1px_0_white]"></div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-red-700 blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
}
