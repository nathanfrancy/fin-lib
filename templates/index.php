<!doctype html>
<html>

<head>
    <title>Template 1</title>
    <link rel="stylesheet" href="../build/css/style.min.css" />
    <script src="../build/js/jquery.min.js"></script>
    <script src="../build/js/bootstrap.min.js"></script>
    <script src="../js/scripts.js"></script>
    <script src="../js/tvm.js"></script>
</head>

<body>

    <div class="jumbotron">
        <h1>tvm.js</h1>
        <p>An easy way to embed time value of money calculations in your webpages.</p>
    </div>

    <div class="container">

        <div class="row">

            <h4>What do you need?</h4>

            <!-- menu items row -->
            <div class="col-sm-3">
                <div class="btn-group-vertical">
                    <div class="btn-group">
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                            Present Value
                            <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="initB" calc="tvmPV">fv, n, r</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                            Future Value
                            <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="initB" calc="tvmFV">pv, r, n</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- forms included -->
            <div class="col-sm-9">

                <!-- tvmPV -->
                <?php include( 'forms/tvmPV.php' ) ?>

                <!-- tvmFV -->
                <?php include( 'forms/tvmFV.php' ) ?>

            </div>
            <!-- col-sm-9 -->

        </div>

    </div>

</body>

<script>
    $(".calculation").hide(); // hide all the forms initially

    $(".initB").click(function() {
        $(".calculation").hide();
        $("#" + $(this).attr("calc")).show();
    });

    $("#tvmPV button").click(function (e) {
        e.preventDefault();
        var calc_fv = parseFloat($("#tvmPV .fv").val());
        var calc_n = parseFloat($("#tvmPV .n").val());
        var calc_r = parseFloat($("#tvmPV .r").val());

        if (isNaN(calc_fv) || isNaN(calc_n) || isNaN(calc_r)) {
            $("#tvmPVresult").html("One or more missing or invalid values.");
        } else {
            var calc_result = tvmUtilDollar(tvmPV(calc_fv, calc_n, calc_r));
            $("#tvmPVresult").html(calc_result);
        }
    });

    $("#tvmFV button").click(function (e) {
        e.preventDefault();
        var calc_pv = parseFloat($("#tvmFV .pv").val());
        var calc_n = parseFloat($("#tvmFV .n").val());
        var calc_r = parseFloat($("#tvmFV .r").val());

        if (isNaN(calc_pv) || isNaN(calc_n) || isNaN(calc_r)) {
            $("#tvmFVresult").html("One or more missing or invalid values.");
        } else {
            var calc_result = tvmUtilDollar(tvmFV(calc_pv, calc_n, calc_r));
            $("#tvmFVresult").html(calc_result);
        }
    });
</script>

</html>
