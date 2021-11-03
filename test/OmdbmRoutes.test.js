let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET not found API', () => {
    it('it should return not found', (done) => {
    chai.request(server)
        .get('/omdb/detail/')
        .end((err, res) => {
                res.should.have.status(404);
            done();
        });
    });
});

describe('/GET Omdb Detail API', () => {
    it('it should return success response', (done) => {
        chai.request(server)
            .get('/omdb/detail/tt1285016')
            .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status').eql(true);
                    res.body.should.have.property('data');
                    res.body.should.have.not.property('error');
                done();
            });
    });

    it('it should return error response when id is wrong', (done) => {
        chai.request(server)
            .get('/omdb/detail/tt1285016ZZ')
            .end((err, res) => {
                    res.body.should.be.a('object');
                    res.body.should.have.property('status').eql(false);
                    res.body.should.have.property('error').eql('Incorrect IMDb ID.');
                done();
            });
    });
});

describe('/GET Omdb Search API', () => {
    it('it should return success response', (done) => {
        chai.request(server)
            .get('/omdb/search?title=iron')
            .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status').eql(true);
                    res.body.should.have.property('data');
                    res.body.should.have.not.property('error');
                done();
            });
    });

    it('it should return error response when no parameter', (done) => {
        chai.request(server)
            .get('/omdb/search/')
            .end((err, res) => {
                    res.body.should.be.a('object');
                    res.body.should.have.property('status').eql(false);
                    res.body.should.have.property('error').eql('Incorrect IMDb ID.');
                done();
            });
    });
});