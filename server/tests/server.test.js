const expect = require('expect');
const supertest = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done)=>{
	Todo.remove({}).then(()=>done());
});

describe(' POST testing /todos', ()=>{
	it('should create a new todo',(done)=>{

		var text = 'Testing testing 123';

		supertest(app)
			.post('/todo')
			.send({text})
			.expect(200)
			.expect((res)=>{
				expect(res.body.text).toBe(text);
			})
			.end((err,res)=>{
				if(err){
					return done(err);
				}

				Todo.find().then((todos)=>{
					expect(todos.length).toBe(1);
					expect(todos[0].text).toBe(text);
					done();
				}).catch((e)=>done(e));
			});

	});

	//
	it('should  not create a new todo with invalid boddy data ',(done)=>{


		supertest(app)
			.post('/todo')
			.send({})
			.expect(400)
			.end((err,res)=>{
				if(err){
					return done(err);
				}

				Todo.find().then((todos)=>{
					expect(todos.length).toBe(0);
					done();
				}).catch((e)=>done(e));
			});
	});

});