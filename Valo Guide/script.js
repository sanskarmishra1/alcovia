














// <!-- <div class="btn-group " role="group" aria-label="Basic radio toggle button group">
// <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
// <label class="btn btn-outline-danger" for="btnradio1">Duelist</label>

// <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
// <label class="btn btn-outline-danger" for="btnradio2">Initiator</label>

// <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
// <label class="btn btn-outline-danger" for="btnradio3">Controller</label>

// <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
// <label class="btn btn-outline-danger" for="btnradio4">Sentinal</label>
// </div> -->
// <!-- <div class="container-fluid container-sm p-3 my-3 bg-warning-subtle align-content-center " id="1">this is 1st div</div>
// <button id="hlobtn1">for div 1</button>
// <div class="container" id="2">this is 2nd div</div>
// <button id="hlobtn2">for div 2</button>
// <div class="container-fluid container-lg p-3 my-3 bg-info-subtle" id="3">
// <h2 class="text-center">this is 3rd div</h2>
// <p class="justify-content-evenly">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti libero nihil aut omnis aliquam atque, accusamus iste recusandae magni tenetur praesentium sint eaque numquam nostrum aliquid, ex repellendus? Eligendi, dolorum.</p>

// </div>
// <button id="hlobtn3">for div 3</button>
// <div class="alert alert-warning alert-dismissible">
// <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
// <strong>Warning! </strong>Close this alert
// </div> -->

// <!-- <button id="rgb">Click to turn on rgb</button> -->
// <!-- <div class="rgb"></div>
// <div class="spinner-border text-muted"></div>
// <div class="spinner-border text-primary"></div>
// <div class="spinner-border text-success"></div>
// <div class="spinner-border text-info"></div>
// <div class="spinner-border text-warning"></div>
// <div class="spinner-border text-danger"></div>
// <div class="spinner-border text-secondary"></div>
// <div class="spinner-border text-dark"></div>
// <div class="spinner-border text-light"></div>
// </div> -->























// $(document).ready(function(){
//     // $('div').on("click", function(){
//     //     console.log("div was clicked")
//     // })

//     $("#1").click(function(){
//             console.log("div 1 was clicked")
//     })
//     $("#2").click(function(){
//     console.log("div 2 was clicked")
//     })
//     // $("#1").one("mouseover", function(){
//     //     console.log("div 3 was hovered")
//     //     $(this).hide()
        
//     // })

//     $("#hlobtn3").on("click", function(e){
//         console.log("hlobtn1 was clicked")
//         $(this).css('background-color','blue')
//         $('#3').toggle()
        
        
//     })

// })

$('#Mode').on("click",function(){
    console.log("mode was clicked")
})


// <!-- Login Modal -->
// <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
//   <div class="modal-dialog" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Login to ChaosRiot</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
//           <form>
//               <div class="form-group">
//                 <label for="exampleInputEmail1">Email address</label>
//                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
//                 <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//               </div>
//               <div class="form-group">
//                 <label for="exampleInputPassword1">Password</label>
//                 <input type="password" class="form-control" id="exampleInputPassword1">
//               </div>
//               <div class="form-group form-check">
//                 <input type="checkbox" class="form-check-input" id="exampleCheck1">
//                 <label class="form-check-label" for="exampleCheck1">Check me out</label>
//               </div>
//               <button type="submit" class="btn btn-primary">Login</button>
//             </form>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> 
//       </div>
//     </div>
//   </div>
// </div>


// <!-- Sign Up Modal -->
// <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">
//   <div class="modal-dialog" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Get an chaotic account</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
//           <form>
//               <div class="form-group">
//                 <label for="exampleInputEmail1">Email address</label>
//                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
//                 <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//               </div>
//               <div class="form-group">
//                 <label for="exampleInputPassword1">Password</label>
//                 <input type="password" class="form-control" id="exampleInputPassword1">
//               </div>
//               <div class="form-group">
//                 <label for="cexampleInputPassword1">Confirm Password</label>
//                 <input type="password" class="form-control" id="cexampleInputPassword1">
//               </div>
               
//               <button type="submit" class="btn btn-primary">Creat Account</button>
//             </form>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> 
//       </div>
//     </div>
//   </div>
// </div>