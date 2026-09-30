/* 1.
class Employee {
    work() :void{
        console.log("employee is present");
        
    }
}
class Developer extends Employee
{
    work() : void{
        console.log("developer is developing")
    }
}
class Tester extends Employee{
work(): void {
    console.log("tester is testing")
}}
class Manager extends Employee{
    work(): void {
        console.log("Manager is leading")
    }
}
let developer=new Developer();
let tester = new Tester();
let manager=new Manager();
developer.work();
tester.work();
manager.work(); */


2.
class Employee {
    work() : void {
        console.log("employee is present");
    }
}
class Developer extends Employee{
    write() :void{
        console.log("developer writes code");
    }
}
class Tester extends Employee {
    test() : void{
        console.log("Tester tests the code");
    }
}
let developer =new Developer();
let tester= new Tester();
developer.work();
developer.write();
tester.work();
tester.test();
