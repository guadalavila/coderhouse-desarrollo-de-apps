import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('address.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS address(id INTEGER PRIMARY KEY NOT NULL, address TEXT NOT NULL, image TEXT NOT NULL)',
                [],
                () => {
                    resolve();
                },
                (_, error) => {
                    reject(error)
                }
            )
        })
    })

    return promise;
}

export const insertAddress = (
    id,
    address,
    image,
) => {
    const promise = new Promise((res, rej) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO address (id, address, image) VALUES (?, ?, ?);',
                [id, address, image],
                (_, result)=> res(result),
                (_, error) => rej(error)
            )
        })
    })
    return promise;
}

export const fetchAddress = () => {
    const promise = new Promise((res, rej) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM address;',
                [],
                (_, result) => res(result),
                (_, err) => rej(err) 
            )
        })
    })
    return promise
}

export const deleteAddress = (
    id
) => {
    const promise = new Promise ((acc, rej) => {
        db.transaction( tx => {
            tx.executeSql(
                'DELETE FROM address WHERE id = ?;',
                [id],
                (_, result) => acc(result),
                (_, error) => rej(error),
            )
        })
    })

    return promise;
}