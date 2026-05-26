import { When } from '../../fixtures/fixtures';

When(
  'Отправлен POST запрос {string} с именем {string} почтой {string} и телом {string}',
  async ({ api }, url: string, name: string, email: string, body: string) => {
    await api.post(url, { name, email, body, postId: 1 });
  },
);

When(
  'Отправлен PUT запрос {string} с именем {string} почтой {string} и телом {string}',
  async ({ api }, url: string, name: string, email: string, body: string) => {
    await api.put(url, { name, email, body, postId: 1 });
  },
);

When(
  'Отправлен PATCH запрос {string} с именем {string} почтой {string} и телом {string}',
  async ({ api }, url: string, name: string, email: string, body: string) => {
    await api.patch(url, { name, email, body });
  },
);
