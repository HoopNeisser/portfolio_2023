import { Locale, Locales } from "./types";
export async function getStaticProps({
  locale,
  locales,
}: {
  locale: Locale;
  locales: Locales;
}) {
  return {
    props: {
      locale,
      locales,
    },
  };
}