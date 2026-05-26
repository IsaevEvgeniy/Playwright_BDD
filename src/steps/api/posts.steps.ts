import { When } from '../../fixtures/fixtures';


When(
  'Отправлен POST запрос {string} с заголовком {string} и телом {string}',
  async ({ api }, url: string, title: string, body: string) => {
    await api.post(url, { title, body, userId: 1 });
  }
);

When(
  'Отправлен PUT запрос {string} с заголовком {string} и телом {string}',
  async ({ api }, url: string, title: string, body: string) => {
    await api.put(url, { title, body, userId: 1 });
  }
);

When(
  'Отправлен PATCH запрос {string} с заголовком {string} и телом {string}',
  async ({ api }, url: string, title: string, body: string) => {
    await api.patch(url, { title, body });
  }
);
