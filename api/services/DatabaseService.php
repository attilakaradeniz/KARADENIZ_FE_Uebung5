<?php


class DatabaseService
{
    protected $db;

    public function __construct($dbHost, $dbName, $dbCharset, $dbUser, $dbPassword)
    {
        $this->db = new PDO("mysql:host=" . $dbHost . ";dbname=" . $dbName . ";charset=" . $dbCharset, $dbUser, $dbPassword);
    }

    public function query($statement){
        $resultTable = array();

        try {
            $table = $this->db->query($statement, PDO::FETCH_ASSOC);
            foreach ($table as $key => $row){
                $resultTable[] = $row;
            }
        }
            catch(PDOException $ex){
                error_log("Query failed: " . $ex->getMessage() . "\n" . $statement);
                return $resultTable;
            }
            return $resultTable;
    }

}