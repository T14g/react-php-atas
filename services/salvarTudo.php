<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
    // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
    // you want to allow, and if so:
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        // may also be using PUT, PATCH, HEAD etc
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

$data = file_get_contents('php://input');
$data = json_decode($data, true);

// var_dump($data);

$datareuniao = $data['dataReuniao'];
$setor = $data['setor'];
$local = $data['localReuniao'];
$agendado = "";
$capa_numero = $data['numero'];
$capa_ata = $data['responsavelAta'];
$capa_reuniao = $data['responsavelReuniao'];
$participantes = $data['participantes'];
$ausentes = $data['ausentes'];
$convidados = $data['convidados'];
$arquivo = $data['arquivo'];
$duracao = $data['duracao'];
$tipoata = $data['idArea'];
$pauta = $data['pauta'];
$objetivo = $data['objetivo'];
$pendencias = $data['pendencias'];

// // echo $setor;
$conn = mysqli_connect("localhost", "root", "", "atas");

// // // capa 
$sql = 'INSERT INTO `capa_ata`(`data`, numero, setor, duracao, `local`, outlook, responsavelata, responsavelreuniao,
                            participantes, ausentes, convidados, arquivo, tipoata, pauta, objetivo)
        VALUES("'.$datareuniao.'","'.$capa_numero.'", "'.$setor.'", "'.$duracao.'", "'.$local.'", "'.$agendado.'", 
        "'.$capa_ata.'", "'.$capa_reuniao.'", "'.$participantes.'", "'.$ausentes.'", "'.$convidados.'", "'.$arquivo.'", 
        "'.$tipoata.'", "'.$pauta.'", "'.$objetivo.'")';

$result = mysqli_query($conn, $sql);

// var_dump($result);
// // // var_dump($pendencias);

foreach($pendencias as $p){
        $numeros = explode(".",$p['numeroPendencia']);
        $numeroAta = $numeros[0];
        $numeroPendencia = $numeros[1];
        $pendencia = $p['pendencia'];
        $prazo = $p['prazo'];

        $ids   = "";
        $nomes = "";
        $responsaveis = $p['responsavel'];
        $tamanho      = count($responsaveis);
        $separador = $tamanho > 1  ? ';' : ''; 
            
        //    $limiter      = 0;
        foreach($responsaveis as $r){
            $separadorID = $tamanho > 1  ? ';' : ''; 
            $separadorNome = $tamanho > 1  ? ', ' : ''; 

            $ids   .= $r['id'] . $separadorID;
            $nomes .= $r['nome'] . $separadorNome;
            $tamanho--;
        }
    $status = $p['status'];


    $sql2 = 'INSERT INTO `itens_ata`(numero, pendencia, prazo, responsavel, `status`, numerocapa, tipoatacapa, setoratacapa, idusuario)
    VALUES("'.$numeroPendencia.'", "'.$pendencia.'", "'.$prazo.'", 
    "'. $nomes.'", "'. $status.'", "'. $capa_numero.'", "'. $tipoata.'", "'. $setor.'", "'. $ids.'")';

    $result2 = mysqli_query($conn, $sql2);
    var_dump($result2);
}

?>

