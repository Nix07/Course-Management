package com.accolite.assignment;

import com.accolite.assignment.domain.Course;
import com.accolite.assignment.domain.Participants;
import com.accolite.assignment.domain.TrainingMaterials;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.module.paramnames.ParameterNamesModule;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TrainingMaterialsControllerTests {
    private MockMvc mockMvc;
    @Autowired
    private WebApplicationContext context;

    ObjectMapper objectMapper = new ObjectMapper()
            .registerModule(new ParameterNamesModule())
            .registerModule(new Jdk8Module())
            .registerModule(new JavaTimeModule());

    @Before
    public void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
    }

    @Test
    public void getAllTrainingMaterialsTest() throws Exception {
        MvcResult result = mockMvc.perform(get("/training")
                .content(MediaType.APPLICATION_JSON_VALUE)).andExpect(status()
                .isOk()).andReturn();

        String resultContent = result.getResponse().getContentAsString();
        TrainingMaterials[] listOfTrainingMaterials = objectMapper.readValue(resultContent, TrainingMaterials[].class);
        Assert.assertEquals(listOfTrainingMaterials.length, 4);
    }

    @Test
    public void getTrainingMaterialsByCourseNameTest() throws Exception {
        MvcResult result = mockMvc.perform(get("/training/Angular")
                .content(MediaType.APPLICATION_JSON_VALUE)).andExpect(status()
                .isOk()).andReturn();
        String resultContent = result.getResponse().getContentAsString();
        TrainingMaterials[] listOfTrainingMaterials = objectMapper.readValue(resultContent, TrainingMaterials[].class);
        Assert.assertEquals(listOfTrainingMaterials.length, 1);
    }

    @Test
    public void createTrainingMaterialTest() throws Exception {
        TrainingMaterials trainingMaterials = new TrainingMaterials();
        trainingMaterials.setCourseName("Unix");
        trainingMaterials.setLink("www.youtube.com/learn-unix");
        String jsonRequest = objectMapper.writeValueAsString(trainingMaterials);
        MvcResult result = mockMvc.perform(post("/training").content(jsonRequest)
                .contentType(MediaType.APPLICATION_JSON_VALUE)).andExpect(status().isOk()).andReturn();

        String resultContent = result.getResponse().getContentAsString();
        TrainingMaterials response = objectMapper.readValue(resultContent, TrainingMaterials.class);
        Assert.assertEquals(response.getCourseName(), "Unix");
    }

    @Test
    public void updateTrainingMaterialsTest() throws Exception {
        TrainingMaterials trainingMaterials = new TrainingMaterials();
        trainingMaterials.setCourseName("Unix");
        trainingMaterials.setLink("www.youtube.com/learn-unix");
        String jsonRequest = objectMapper.writeValueAsString(trainingMaterials);
        MvcResult result = mockMvc.perform(put("/training").content(jsonRequest)
                .contentType(MediaType.APPLICATION_JSON_VALUE)).andExpect(status().isOk()).andReturn();

        String resultContent = result.getResponse().getContentAsString();
        Boolean response = objectMapper.readValue(resultContent, Boolean.class);
        Assert.assertTrue(String.valueOf(response), true);
    }

    @Test
    public void deleteTrainingMaterialTest() throws Exception {
        MvcResult result = mockMvc.perform(delete("/training/3")
                .content(MediaType.APPLICATION_JSON_VALUE)).andExpect(status()
                .isOk()).andReturn();
        String resultContent = result.getResponse().getContentAsString();
        Boolean response = objectMapper.readValue(resultContent, Boolean.class);
        Assert.assertTrue(String.valueOf(response), true);
    }
}
