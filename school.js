const EventEmitter = require('events');

class School extends EventEmitter {
    startPreiod() {
        console.log('Class started');
        // raise event when bell ring
        // raise an event

        setTimeout(() => {
            this.emit('bellRing', {
                period: 'frist',
                text: 'period ended',
            });
        });
    }
}

module.exports = School;
