/*
*   Bu dosyada kullanıcıların bilgilerini alması için
*   get requesti gönderen bir route yapılacaktir.
*   Bu dosyadaki bütün routelar /users şeklinde başlar.
*/

// express'in kütüphanesi eklendi.
import express from 'express';

import { findUsers, getUsers, createUsers, deleteUsers, updateUsers } from '../controllers/users.js';

// Router nesnesini oluşturduk.
const router= express.Router();

// route'un yapması gereken işler bu kısımda tanımlandı.
router.get('/',getUsers);

// Burada yeni kullacılar ekleniyor.
router.post('/',createUsers);

// bu route sayesinde url'de girilen id'e ait olan user'ı verileri ekrana yazılır.
router.get('/:id',findUsers);

// bu route sayesinde girilen id numarasına ait kullanıcı silinir.
router.delete('/:id',deleteUsers);

// bu route sayesinde girilen id numarasına ait kullanıcı üzerinde değişikler yapılır.
router.patch('/:id',updateUsers);

// index.js dosyasında burada yazılanların çalışması için route'u export ediyoruz.
export default router;