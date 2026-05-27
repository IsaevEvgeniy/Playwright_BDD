import { When } from '../../fixtures/fixtures';

When(
  'Отправлен POST запрос {string} с заголовком {string}',
  async ({ api }, url: string, title: string) => {
    await api.post(url, { title, userId: 1 });
  }
);

When(
  'Отправлен PUT запрос {string} с заголовком {string}',
  async ({ api }, url: string, title: string) => {
    await api.put(url, { title, userId: 1 });
  }
);

When(
  'Отправлен PATCH запрос {string} с заголовком {string}',
  async ({ api }, url: string, title: string) => {
    await api.patch(url, { title });
  }
);
