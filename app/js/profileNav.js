const myProfileNavBar =()=>{
    let myImgNav = 35;
$('#pro-nav-bar').append(
`
<div class="container-fluid" style="background-color:#FAFAFA !important">
                <!--================= Menu =================-->
                <nav class="navbar navbar-expand-lg navbar-light fixed-top scrolling-navbar white top-nav-collapse">
                    <div class="container" style="padding-left:0px">
                        <a class="navbar-brand" href="/home">
                            <img src="img/logo_lumhat.png" height="40" alt="">
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent-7">
                            <ul class="navbar-nav ml-auto menu-list">
                                <li class="nav-item">
                                    <a class="nav-link" href="index.html"><span>ទំព័រ​ដើម</span>
                                        <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="it-category.html"><span>ព័ត៌​មាន​វិទ្យា</span></a>
                                </li>
            
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><span>អង់​គ្លេស</span></a>
                                </li>
            
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><span>កូរ៉េ</span></a>
                                </li>
            
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><span>អំពី​​យើង</span></a>
                                </li>
            
                                <li class="nav-item">
                                    <a class="nav-link" id="langkm"><img src="img/ic_flag_us.png" height="24px" alt=""></a>
                                </li>
            
                                <li class="nav-item">
                                    <a class="nav-link" id="langen"><img src="img/ic_flag_cambodia.png" height="24px" alt=""></a>
                                </li>
            
                                <div>
                                    <li class="nav-item">
                                        <a class="nav-link "  href="profile.html" aria-expanded="false" >
                                            <span ><i class="fa fa-user-circle-o login"></i><span>
                                            <img class="rounded-circle" src="${proPic}" style="width: ${myImgNav}px; height: ${myImgNav}px"
                                                alt="First sample avatar image">&nbsp&nbsp${proSurName}</span></span>
                                        </a>
                                    </li>
                                    <!-- <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            <i class="fas fa-user"></i> Profile </a>
                                        <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                                            <a class="dropdown-item" href="#">My account</a>
                                            <a class="dropdown-item" href="#">Log out</a>
                                        </div>
                                    </li> -->
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
                <!--================= End Menu =================-->
            </div>
`)
}

myProfileNavBar();