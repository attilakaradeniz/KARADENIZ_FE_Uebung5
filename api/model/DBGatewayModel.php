<?php


class DBGatewayModel extends DatabaseService
{
    public function DBGatewayModel(){
        parent::__construct(DBHost, DBName, charset, DBUserName, DBPassword);
    }
}