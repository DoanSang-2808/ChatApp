const conponent = {

}
conponent.registerPage = `
    <div class="register-container"  > 
        <div class="backIm"></div>
        <div class="form-wrapper">
            <form id="form-register">
                <div class="title"><h3>MinX Chat</h3></div>
                <div class="name-wrapper">
                    <div class="input-wrapper">
                        <input type="text" placeholder="First Name..." name="firstName">
                        <div class="err" id="first-name-error"></div>
                     </div>
                     <div class="input-wrapper">
                         <input type="text" placeholder="Last Name..." name="lastName">
                         <div class="err" id="last-name-error"></div>
                      </div>
                </div>
                 <div class="input-wrapper">
                    <input type="text" placeholder="Email..." name="Email">
                    <div class="err" id="email-error"></div>
                 </div>
                 <div class="input-wrapper">
                    <input type="password" placeholder="Password..." name="Password">
                    <div class="err" id="Password-error"></div>
                 </div>
                 <div class="input-wrapper">
                    <input type="password" placeholder="Confirm Password..." name="confirmPassword">
                    <div class="err" id="confirm-password-error"></div>
                 </div>
                 <div class="register-action">
                     <div> Already have an account?<span id="redirect-login" class= "cursor-pointer">Login</span></div>
                     <button type="submit" class="btn">Register</button>
                 </div>
            </form>
        </div>
    </div>`
conponent.loginPage = ` <div class="login-container"  > 
<div class="backIm" ></div>
<div class="form-wrapper">
    <form id="form-login">
        <div class="title"><h3>MinX Chat</h3></div>
         <div class="input-wrapper">
            <input type="text" placeholder="Email..." name="Email">
            <div class="err" id="email-error"></div>
         </div>
         <div class="input-wrapper">
            <input type="password" placeholder="Password..." name="Password">
            <div class="err" id="password-error"></div>
         </div>
         <div class="login-action">
             <div> Already have an account?<span id="login-register" class="cursor-pointer">Register</span></div>
             <button type="submit" class="btn">Login</button>
         </div>
    </form>
</div>
</div>`
conponent.chatMain = `<div class="chat-container">
<div class="header">MindX Chat</div>
<div class="main">
    <div class="aside-left">
                <div class="creat-conversation">
                    <button class='btn cursor-pointer' id='createChat'>+ New Conversation</button>
                </div>
                <div class="list-conversation">
                    
                </div>

            </div>
    <div class="conversation-detail">
        <div class="conversation-title"> First conversation</div>
        <div class="list-message">
            
        </div>
        <form id="send-message-form">
            <input type="text" name="message" id="" placeholder="type a message">
            
            <button class="btn">Send</button>
        </form>
    </div>
</div>
</div>`

conponent.CreateChat =`<div class="chat-container">
<div class="header">MindX Chat</div>
<div class="main-create-conversation">
    <div class="create-conversation-detail">
      <div class="create-conversation-title">Create a new conversation</div>
      <form id='create'>
        <div>
        <input type="text" name="conversationName" placeholder="Conversation name">
        </div>
        <div>
        <input type="text" name="friendEmail" placeholder="Friend email">
        </div>
        <div class="create-conversation-submit">
          <button type='submit' class="btn">Save</button>
          <button  type ='button' class="btn btn-cancer">Cancel</button>
        </div>
      </form>
    </div>
  </div>
  </div>`