const jsonServer = require('json-server');
const db = require('./db.json');
const fs = require('fs');
const server = jsonServer.create();
const router = jsonServer.router('mock-server/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

server.get('/employees', (req, res) => {
  res.json(read('employees')[0].map(({ id, name, position }) => ({ id, name, position })));
});

server.get('/employees/:id', (req, res) => {
  const employee = read('employees')[0].find(({ id }) => id === parseInt(req.params.id, 10));

  employee ? res.json(employee) : res.status(404).json({ message: 'Employee not found' });
});

server.get('/employees/:assigneeId/courses', (req, res) => {
  const assigneeId = parseInt(req.params.assigneeId, 10);

  const courses = read('courses')[0]
    .filter((course) => course.assignees.some((assignee) => assignee === assigneeId))
    .map(({ id, name }) => ({ id, name }));

  res.json(courses || []);
});

server.get('/courses', (req, res) => {
  res.json(
    read('courses')[0].map(({ id, name, description, seats, assignees }) => ({
      id,
      name,
      description,
      seatsLeft: seats - assignees.length,
    }))
  );
});

server.get('/courses/:id', (req, res) => {
  const course = read('courses')[0].find(({ id }) => id === parseInt(req.params.id, 10));

  course ? res.json(course) : res.status(404).json({ message: 'Course not found' });
});

server.patch('/courses/:id/assignees', (req, res) => {
  const courseId = parseInt(req.params.id, 10);
  const [data, db] = read('courses');
  const course = data.find(({ id }) => id === courseId);

  if (!course) {
    res.status(404).json({ message: `Course ${courseId} not found` });

    return;
  }

  if (course.assignees.length >= course.seats) {
    res.status(400).json({ message: 'No seats left' });

    return;
  }

  if(course.assignees.includes(req.body.employeeId)){
    res.status(409).json({ message: 'Employee already assigned' });

    return;
  }

  course.assignees.push(req.body.employeeId);

  db['courses'] = data;
  write(db);
  res.send(course);
});

server.delete('/courses/:courseId/assignees/:assigneeId', (req, res) => {
  const courseId = parseInt(req.params.courseId, 10);
  const assigneeId = parseInt(req.params.assigneeId, 10);
  const [data, db] = read('courses');
  const course = data.find(({ id }) => id === courseId);

  if (!course) {
    res.status(404).json({ message: `Course ${courseId} not found` });

    return;
  }


  course.assignees = course.assignees.filter((id) => id !== assigneeId);

  db['courses'] = data;
  write(db);
  res.send(course);
});

server.get('/assignable-employees', (req, res) => {
  res.json(
    read('employees')[0].map(({ id, name, position }) => ({
      id,
      name,
      position,
    }))
  );
});

function read(entityName) {
  const dbRaw = fs.readFileSync('mock-server/db.json', 'utf8');
  const db = JSON.parse(dbRaw);

  return [db[entityName], db];
}

function write(db) {
  fs.writeFileSync('mock-server/db.json', JSON.stringify(db, null, 2));
}
