<!--suppress HtmlDeprecatedAttribute -->
<h1 align="center">
  <br>
  <a href="https://www.sphereon.com"><img src="https://sphereon.com/content/themes/sphereon/assets/img/logo.svg" alt="Sphereon" width="400"></a>
  <br>SSI UI Components (React)
  <br>
</h1>

---

**Warning: This package still is in every early development. Breaking changes without notice will happen at this point!**

---

A React package containing UI components for SSI

### Localization

To provide localization, you can wrap your app with a locale provider and expose the locale to the UI components.
* Currently only the English and Dutch locales are supported.

#### Adding a locale provider

```shell
import {LocaleProvider} from "@sphereon/ui-components.core";

<LocaleProvider>
  <App/>
</LocaleProvider>
```

#### Exposing the locale

```shell
import {LocaleContext} from "@sphereon/ui-components.core";

const { locale, setLocale } = useContext(LocaleContext)
setLocale('en')
```

### Build

```shell
pnpm build
```

### Installation

```shell
pnpm install @sphereon/ui-components.ssi-react
```
