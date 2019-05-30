const myProfileNavBar =()=>{
    let myImgNav = 35;
$('#pro-nav-bar').append(
`
<div class="container-fluid" style="background-color:#FAFAFA !important">
                <!--================= Menu =================-->
                <nav class="navbar navbar-expand-lg navbar-light fixed-top scrolling-navbar white top-nav-collapse">
                    <div class="container" style="padding-left:0px">
                        <a class="navbar-brand" href="index.html">
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

const myProfileFooterBar = ()=>{
    $('#pro-footer-nav').append(
`
<!--================= Footer =================-->
<img class="footer-img" src="img/img_footer.png" alt="" width="100%">
<footer class="page-footer font-small mdb-color pt-4" id="footer-blog">
        <div class="container text-center text-md-left">
            <div class="row text-center text-md-left mt-3">
                <div class="col-md-4 col-lg-4 col-xl-4 mx-auto">
                    <img src="img/lumhat-white.png" class="img-foot-logo" alt="" width="100px" height="55px">
                    <div class=" pt-1">
                        <p class="lumhat-text">វេប​សាយ លំហាត់ គឺ​ជា​វេទិកា​សំរាប់​សាកល្បង​ចំនេះ​ដឹង​តាមរយៈ​បណ្តាញ​អ៊ីនធឺណេត​នៅ​កម្ពុជា។ លំហាត់​ត្រូវ​បាន​បង្កើត​ឡើង​ដោយ​មជ្ឈមណ្ឌល​​កូរ៉េ អេច​​ អ ​ឌី នៅឆ្នាំ ២០១៧ ។</p>
                    </div>
                </div>
              <hr class="w-100 clearfix d-md-none">
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 class="text-uppercase foot-content  font-weight-bold"><span>មុខវិជ្ជា​ទាំងអស់</span></h6>
                    <div class="mt-4 pt-2">
                        <p class="lumhat-text-p">
                            <a href="/category?major_id=1"><span>ព័ត៌មាន​វិទ្យា</span></a>
                        </p>
                        <p class="lumhat-text-p">
                            <a href="/category?major_id=2"><span>ភាសាអង់គ្លេស</span></a>
                        </p>
                        <p class="lumhat-text-p">
                            <a href="/category?major_id=3"><span>ភាសាកូរ៉េ</span></a>
                        </p>
                    </div>
                </div>
                <hr class="w-100 clearfix d-md-none">
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 class="text-uppercase mb-2 font-weight-bold foot-content"><span>ទំនាក់​ទំនង</span></h6>
                    <div class="mt-4 pt-0">
                        <p class="lumhat-text-p">
                            <i class="fa fa-home mr-3"></i> <span>ផ្ទះលេខ ១២, ផ្លូវលេខ ៣២៣,សង្កាត់ បឹងកក់ ២,ខណ្ឌ ទួលគោក ,រាជធានីភ្នំពេញ</span></p>
                        <a class="lumhat-text-p" href="mailto:info.kshrd@gmail.com">
                            <i class="fa fa-envelope mr-3"></i> info.kshrd@gmail.com</a>
                        <p class="lumhat-text-p">
                            <i class="fa fa-phone mr-3"></i> (855)23 991 314</p>
                    </div>
                </div>
                <hr class="w-100 clearfix d-md-none">
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 ">
                    <h6 class="text-uppercase mb-4 font-weight-bold foot-content"><span>បណ្តាញ​សង្គម Facebook</span></h6>
                    <div class="mt-4 pt-1">
                        <iframe allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" title="fb:like_box Facebook Social Plugin" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Flumhatonline%2F&amp;tabs=timeline&amp;width=250&amp;height=150&amp;small_header=true&amp;adapt_container_width=false&amp;hide_cover=false&amp;show_facepile=true&amp;appId=892019850988433" style="border: none; visibility: visible; width: 100%;" width="100px" height="1%" frameborder="0">
                        </iframe>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row d-flex align-items-center">
                <div class="col-md-7 col-lg-8">
                    <p class="text-center text-md-left">© 2018 <span>រក្សា​សិទ្ធដោយ</span>:
                        <a href="#">
                            <strong> LUMHAT</strong>
                        </a>
                    </p>
                </div>
                <div class="col-md-5 col-lg-4 ml-lg-0">
                    <div class="text-center text-md-right">
                    </div>
                </div>
            </div>
        </div>
        <div id="stop" class="scrollTop" style="">
                <a href="#"><img src="img/scrollToTop.png"></a>
        </div>
    </footer>
`
)
}

myProfileNavBar();
myProfileFooterBar();