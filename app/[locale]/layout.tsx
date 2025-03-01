import React, { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

// Define the types for the props expected by LocaleLayout
type LocaleLayoutProps = {
  children: ReactNode; // Typing children to be any valid React node
  params: {
    locale: string; // Ensuring locale is a string
  };
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "sv" }];
}

// Apply the LocaleLayoutProps type to the function's parameters
const LocaleLayout: React.FC<LocaleLayoutProps> = async ({
  children,
  params: { locale },
}) => {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
