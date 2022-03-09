/*
 *
 * title: data management
 * Description: file management data
 * Author: Md Minarul islam
 * Date 3/7/2022
 *
 */
// dependenci
const fs = require('fs');
const path = require('path');

const lib = {};

// base driectory of the data folder
lib.basedir = path.join(__dirname, '/../.data/');

// write data to file
lib.create = (dir, file, data, callback) => {
    fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', (err, fileDecriptor) => {
        if (!err && fileDecriptor) {
            // convert data to string
            const stringData = JSON.stringify(data);

            // write data to file and then close it
            fs.writeFile(fileDecriptor, stringData, (err2) => {
                if (!err2) {
                    fs.close(fileDecriptor, (err3) => {
                        if (!err3) {
                            callback(false);
                        } else {
                            callback('Error closing the new file! ');
                        }
                    });
                } else {
                    callback('Error writing to new file');
                }
            });
        } else {
            callback('Could not create new file, it may aleady exists!');
        }
    });
};
// read data from file
lib.read = (dir, file, callback) => {
    fs.readFile(`${lib.basedir + dir}/${file}.json`, 'utf-8', (err, data) => {
        callback(err, data);
    });
};
// file update
lib.update = (dir, file, data, callback) => {
    // file open for writing
    fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (err, fileDecriptor) => {
        if (!err && fileDecriptor) {
            // convert the data to string
            const stringData = JSON.stringify(data);

            // truncate the file
            fs.ftruncate(fileDecriptor, (err1) => {
                if (!err1) {
                    // write to the ile and close it
                    fs.writeFile(fileDecriptor, stringData, (err2) => {
                        if (!err2) {
                            // close the file
                            fs.close(fileDecriptor, (err3) => {
                                if (!err3) {
                                    callback(false);
                                } else {
                                    callback('Error closing file!');
                                }
                            });
                        } else {
                            callback('errow writing to file!');
                        }
                    });
                } else {
                    console.log('Error truncating file!');
                }
            });
        } else {
            console.log('Error Pdating File may not exits.');
        }
    });
};
// delete extiting file
lib.delete = (dir, file, callback) => {
    fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
        if (!err) {
            callback(false);
        } else {
            callback('error deleting file');
        }
    });
};

module.exports = lib;
