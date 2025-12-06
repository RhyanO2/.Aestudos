const {fetchdata} = require('./fetchData');
// import fetchData from './fetchData';

test('The data must be Peanut Butter', done =>{
    function callback(data){
        try {
            expect(data).toBe('Peanut Butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchdata(callback);
});
