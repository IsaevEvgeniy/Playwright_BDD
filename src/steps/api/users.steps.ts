import { When } from '../../fixtures/fixtures';

When(
  'Отправлен POST запрос {string} с именем {string} и должностью {string}',
  async ({ api }, url: string, name: string, job: string) => {
    await api.post(url, { name, job });
  },
);

When(
  'Отправлен PUT запрос {string} с именем {string} и должностью {string}',
  async ({ api }, url: string, name: string, job: string) => {
    await api.put(url, { name, job });
  },
);

When(
  'Отправлен PATCH запрос {string} с именем {string} и должностью {string}',
  async ({ api }, url: string, name: string, job: string) => {
    await api.patch(url, { name, job });
  },
);
