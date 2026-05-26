import { expect } from '@playwright/test';
import { Then, When } from '../../fixtures/fixtures';

When('Отправлен GET запрос {string}', async ({ api }, url: string) => {
  await api.get(url);
});

When('Отправлен DELETE запрос {string}', async ({ api }, url: string) => {
  await api.delete(url);
});

Then('Статус ответа равен {int}', async ({ api }, status: number) => {
  expect(api.response.status()).toBe(status);
});

Then('Список не пустой', async ({ api }) => {
  const body = await api.response.json();
  expect((body as unknown[]).length).toBeGreaterThan(0);
});

Then('Список пустой', async ({ api }) => {
  const body = await api.response.json();
  expect((body as unknown[]).length).toBe(0);
});

Then('Ответ содержит поле {string}', async ({ api }, field: string) => {
  const body = await api.json();
  expect(body).toHaveProperty(field);
});
