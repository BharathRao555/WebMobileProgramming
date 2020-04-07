package com.example.demoapp;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import androidx.appcompat.app.AppCompatActivity;
public class Main2Activity extends AppCompatActivity {
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
    }

    public void logout(View view) {
        Intent redirect = new Intent(Main2Activity.this, MainActivity.class);
        startActivity(redirect);
    }
}