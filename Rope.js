class Rope{
constructor (BodyR, PointR) {
var options = {
bodyA:BodyR,
pointB:PointR,
stiffness:0.2,
length:150
}
this.body=Constraint.create(options)
World.add(world,this.body)
this.pointR=PointR
}
display() {

push()
stroke("blue");
line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.pointR.x, this.pointR.y)
pop()
}
}