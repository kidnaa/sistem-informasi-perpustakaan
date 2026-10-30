// Test suite sederhana
function tambahBukuTest(nama) {
  if (!nama) return false;
  return true;
}

test('Memvalidasi penambahan buku', () => {
  expect(tambahBukuTest('Buku Pemrograman')).toBe(true);
  expect(tambahBukuTest('')).toBe(false);
});