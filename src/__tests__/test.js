import Daemon from '../js/daemon';
import Magician from '../js/magician';

test('Ближняя дистанция без дурмана', () => {
  const magician = new Magician('Kate');
  magician.distance = 1;
  expect(magician.attack).toBe(100);
});

test('Дальняя дистанция без дурмана', () => {
  const daemon = new Daemon('Petr');
  daemon.distance = 5;
  expect(daemon.attack).toBe(60);
});

test('Средняя дистанция с дурманом', () => {
  const magician = new Magician('Leila');
  magician.distance = 2;
  magician.stoned = true;
  expect(magician.attack).toBe(85);
});

test('Дальняя дистанция с дурманом', () => {
  const daemon = new Daemon('Serj');
  daemon.distance = 5;
  daemon.stoned = true;
  expect(daemon.attack).toBe(48);
});
