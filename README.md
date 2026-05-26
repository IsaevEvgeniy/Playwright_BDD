# Playwright BDD

Playwright + BDD: автоматизация UI, E2E и API тестов

- Архитектура на основе POM с разделением UI, E2E и API слоёв
- BDD подход с Gherkin-сценариями на русском языке
- Запуск в трёх браузерах (Chromium, Firefox, WebKit)
- Тегирование тестов (@Sanity / @Smoke / @Regression) для выборочного прогона
- Оптимизация авторизации через storageState (единый логин для всей сессии)
- CI/CD интеграция (GitHub Actions) с сохранением артефактов
- Отчётность в двух форматах: Allure (детальный) + Playwright HTML (встроенный)

## Структура проекта

```
Playwright_BDD/
├── src/
│   ├── api/
│   │   └── api.client.ts
│   │
│   ├── config/
│   │   ├── urls.config.ts
│   │   └── users.config.ts
│   │
│   ├── features/
│   │   ├── ui/
│   │   │   ├── login.feature
│   │   │   ├── navigation.feature
│   │   │   ├── product.feature
│   │   │   ├── cart.feature
│   │   │   └── checkout.feature
│   │   │
│   │   ├── e2e/
│   │   │   ├── purchase.single.feature
│   │   │   ├── purchase.multiple.feature
│   │   │   ├── purchase.after.remove.feature
│   │   │   ├── purchase.sorted.feature
│   │   │   └── purchase.continue.feature
│   │   │
│   │   └── api/
│   │       ├── comments.negative.feature
│   │       ├── comments.positive.feature
│   │       ├── posts.negative.feature
│   │       ├── posts.positive.feature
│   │       ├── users.negative.feature
│   │       └── users.positive.feature
│   │
│   ├── fixtures/
│   │   └── fixtures.ts
│   │
│   ├── pages/
│   │   ├── base.page.ts
│   │   ├── login.page.ts
│   │   ├── header.menu.ts
│   │   ├── product.page.ts
│   │   ├── cart.page.ts
│   │   └── checkout.page.ts
│   │
│   ├── setup/
│   │   └── auth.setup.ts
│   │
│   └── steps/
│       ├── ui/
│       │   ├── login.steps.ts
│       │   ├── navigation.steps.ts
│       │   ├── product.steps.ts
│       │   ├── cart.steps.ts
│       │   └── checkout.steps.ts
│       │
│       └── api/
│           ├── comments.step.ts
│           ├── common.steps.ts
│           ├── posts.steps.ts
│           └── users.steps.ts
│
├── .env
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

### Инструкция по запуску

### 1. Установка зависимостей

```bash
npm install
```

### 2. Установка браузеров

```bash
npm run install:browsers
```

### 3. Настройка окружения

```env
BASE_URL=
BASE_URL_API=

USER_STANDARD=
PASSWORD_STANDARD=
```

### 4. Запуск тестов

```bash
# по браузерам
npm run test:chromium   # запуск в Chrome
npm run test:firefox    # запуск в Firefox
npm run test:webkit     # запуск в Safari
npm run test:all        # запуск во всех браузерах

# по слоям
npm run test:ui         # запуск UI тестов
npm run test:e2e        # запуск E2E тестов
npm run test:api        # запуск API тестов

# по тегам
npm run sanity          # запуск sanity тестов
npm run smoke           # запуск smoke тестов
npm run regression      # запуск regression тестов

# специальные режимы
npm run ui              # запуск в UI режиме
npm run debug           # запуск в режиме отладки
npm run ci              # запуск в CI режиме
```

### 5. Просмотр и генерация отчетов

```bash
# Allure
npm run allure:generate   # генерация Allure отчета
npm run allure:open       # запуск Allure отчета
npm run allure:serve      # запуск Allure отчета через сервер

# Playwright
npm run report:open       # запуск Playwright отчета
```
