<!-- @format -->

# PROJECT CRUD

Proyek ini adalah implementasi CRUD (Create, Read, Update, Delete) untuk mengelola produk yang memiliki banyak varian. Setiap produk dapat memiliki berbagai varian seperti nama varian, warna, dan harganya.

## Fitur

1. Melihat daftar produk
2. Membuat produk baru
3. Mengedit informasi produk
4. Menghapus salah satu produk
5. Melihat varian dari salah satu produk
6. Membuat varian baru dari salah satu produk
7. Mengedit informasi varian
8. Menghapus salah satu varian dari salah satu produk

## Dokumentasi

### Endpoint Get All Product:

**Request**

- Method: `GET`
- URL: `/products`

**Response**

- Body:
  ```json
  [
      {
          "id": "product_id_1",
          "prod_name": "Nama Produk",
          "prod_desc": "Deskripsi Produk",
          "prod_price": 10000,
          "prod_image_url": "URL Produk",
          "variants": [
              {
                  "id": "variant_id_1",
                  "variant_name": "Nama Varian",
                  "variant_color": "Warna Varian",
                  "price": 11000,
                  "prodId": "product_id_1"
              },
              {
                  "id": "variant_id_2",
                  "variant_name": "Nama Varian",
                  "variant_color": "Warna Varian",
                  "price": 12000,
                  "prodId": "product_id_1"
              }
          ]
      },
          "id": "product_id_2",
          "prod_name": "Nama Produk",
          "prod_desc": "Deskripsi Produk",
          "prod_price": 20000,
          "prod_image_url": "URL Produk",
          "variants": [
              {
                  "id": "variant_id_1",
                  "variant_name": "Nama Varian",
                  "variant_color": "Warna Varian",
                  "price": 21000,
                  "prodId": "product_id_1"
              }
          ]
  ]
  ```
  **Penjelasan:**
  Rute ini digunakan untuk mendapatkan daftar semua produk yang tersedia. Setiap produk mencakup informasi dasar seperti `id`, `prod_name`, `prod_desc`, `prod_price`, `prod_image_url`, dan `variants` yang terkait dengan produk tersebut.

### Endpoint Add Product:

**Request**

- Method: `POST`
- URL: `/products`
- Body:

```json
{
  "prod_name": "Nama Produk",
  "prod_desc": "Deskripsi Produk",
  "prod_price": 10000,
  "prod_image_url": "URL Produk"
}
```

**Response**

- Status: `201`
- Body:

```json
{
  "prod_name": "Nama Produk",
  "prod_desc": "Deskripsi Produk",
  "prod_price": 10000,
  "prod_image_url": "URL Produk"
}
```

**Penjelasan:**

Rute ini digunakan untuk menambahkan produk baru. Setiap produk mencakup informasi dasar seperti `prod_name`, `prod_desc`, `prod_price`,dan `prod_image_url` yang terkait dengan produk tersebut. Setelah produk berhasil ditambahkan, respons akan mencakup pesan sukses dan detail produk yang baru ditambahkan.

### Endpoint Edit Product:

**Request**

- Method: `PUT`
- URL: `/products/:id`
- Body:

```json
{
  "prod_name": "Nama Produk Baru",
  "prod_desc": "Deskripsi Produk Baru",
  "prod_price": 10000,
  "prod_image_url": "URL Produk Baru"
}
```

**Response**

- Status: `201`
- Body:

```json
{
  "prod_name": "Nama Produk Baru",
  "prod_desc": "Deskripsi Produk Baru",
  "prod_price": 10000,
  "prod_image_url": "URL Produk Baru"
}
```

**Penjelasan:**

Rute ini digunakan untuk mengedit produk yang sudah ada berdasarkan ID produk tersebut. Setelah produk berhasil diperbarui, respons akan mencakup pesan sukses dan detail produk yang baru diperbarui.

### Endpoint Delete Product:

**Request**

- Method: DELETE
- URL: /products/:id

**Response**

- Status: `204`

**Penjelasan**

Rute ini digunakan untuk menghapus produk yang sudah ada berdasarkan ID produk tersebut. Ketika produk berhasil dihapus, respons tidak akan mengandung body.

## Enpoint View Variants:

**Request**

- Method: `GET`
- URL: `/products/:productId/variants`

**Response**

- Body:

```json
{
  "variant_name": "Nama varian",
  "variant_color": "Warna Varian",
  "variant_price": 10000,
  "prodId": 1
}
```

**Penjelasan:**

Rute ini digunakan untuk melihat semua varian dari sebuah produk berdasarkan ID produk tersebut. Respons akan mencakup informasi ID produk dan daftar varian yang terkait dengan produk tersebut, seperti `variant_name`, `variant_color`, `variant_price`, dan `prodId`.

### Endpoint Add Variant:

**Request**

- Method: `POST`
- URL: `/products/:productId/variants`
- Body:

```json
{
  "variant_name": "Nama varian",
  "variant_color": "Warna Varian",
  "variant_price": 10000,
  "prodId": 1
}
```

**Response**

- Status: `201`
- Body:

```json
{
  "variant_name": "Nama varian",
  "variant_color": "Warna Varian",
  "variant_price": 10000,
  "prodId": 1
}
```

**Penjelasan:**
Rute ini digunakan untuk menambahkan varian baru pada produk yang sudah ada berdasarkan ID produk tersebut. Setelah varian berhasil ditambahkan, respons akan mencakup informasi detail varian yang baru ditambahkan, termasuk `variant_name`, `variant_color`, `variant_price`, dan `prodId`.

### Endpoint Edit Variant:

**Request**

- Method: `PUT`
- URL: `/variants/:id`
- Body:

```json
{
  "variant_name": "Nama varian yang diperbarui",
  "variant_color": "Warna Varian yang diperbarui",
  "variant_price": 15000
}
```

**Response**

- Status: `200`
- Body:

```json
{
  "variant_name": "Nama varian yang diperbarui",
  "variant_color": "Warna Varian yang diperbarui",
  "variant_price": 15000,
  "prodId": 1
}
```

**Penjelasan:**
Rute ini digunakan untuk mengedit informasi varian berdasarkan ID varian. Setelah varian berhasil diperbarui, respons akan mencakup pesan konfirmasi serta informasi detail varian yang telah diperbarui, termasuk `variant_name`, `variant_color`, `variant_price`, dan `prodId`.

### Endpoint Delete Variant:

**Request**

- Method: `DELETE`
- URL: `/variants/:id`

**Response**

- Status: `200`

**Penjelasan:**

Rute ini digunakan untuk menghapus varian berdasarkan ID varian.
