// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-access-control
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

module.exports = function(app) {
  var User = app.models.user;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
 // var Team = app.models.Team;
   //-----------------------------------
  // User.create([
  //   {username: 'Jo5', email: 'jo5@doe.com', password: '11'},
  //   {username: 'Ja5', email: 'jan5@doe.com', password: '11'},
  //   {username: 'Bo5', email: 'bo5@21prts.com', password: '11'}
  // ], function(err, users) {
  //   if (err) throw err;

  //   console.log('Created users:', users);

  //   // create project 1 and make john the owner
  //   users[0].product.create({
  //     id:'123111111115',
  //     name: 'product116',
  //     price: 1001,
  //     ownerId:users[0].id
  //   }, function(err, product) {
  //     if (err) throw err;

  //     console.log('Created product:', product);
   //-----------------------------------
      // add team members
    //   Team.create([
    //     {ownerId: project.ownerId, memberId: users[0].id},
    //     {ownerId: project.ownerId, memberId: users[1].id}
    //   ], function(err, team) {
    //     if (err) throw err;

    //     console.log('Created team:', team);
    //   });
    // });

    //create project 2 and make jane the owner

    //-----------------------------------
    // users[1].product.create({
    //    id:'122151112',
    //   name: 'produ5ct121',
    //   price: 100,
    //    ownerId:users[1].id
    // }, function(err, product) {
    //   if (err) throw err;
    //   console.log('Created product:', product);
    // });
   //-----------------------------------
      //add team members
    //   Team.create({
    //     ownerId: project.ownerId,
    //     memberId: users[1].id
    //   }, function(err, team) {
    //     if (err) throw err;

    //     console.log('Created team:', team);
    //   });
 
    //create the admin role
    // Role.create({
    //   name: 'admin'
    // }, function(err, role) {
    //   if (err) throw err;

    //   console.log('Created role:', role);

    //   //make bob an admin
    //   role.principals.create({
    //     principalType: RoleMapping.USER,
    //     principalId: users[2].id
    //   }, function(err, principal) {
    //     if (err) throw err;

    //     console.log('Created principal:', principal);
    //   });


   // });
//   });
// });

}
